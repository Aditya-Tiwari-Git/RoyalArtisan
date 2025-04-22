import { useQuery } from "@tanstack/react-query";
import { Product, ProductsResponse } from "@/types/products";

// Use our proxy endpoint instead of direct Google Sheets URL
const API_ENDPOINT = "/api/products";

const fetchProducts = async (): Promise<Product[]> => {
  try {
    console.log("Fetching products from API endpoint...");
    
    // Use our server proxy endpoint to avoid CORS issues
    const response = await fetch(API_ENDPOINT);
    
    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.text();
    console.log("Response received, length:", data.length);

    // Google Sheets API returns JSON-like data wrapped in some additional text
    // First, remove the prefix and suffix parts
    const prefix = "/*O_o*/\ngoogle.visualization.Query.setResponse(";
    const suffix = ");";
    
    let jsonString = data;
    
    if (data.startsWith(prefix)) {
      console.log("Using prefix/suffix extraction method");
      jsonString = data.substring(prefix.length);
      
      if (jsonString.endsWith(suffix)) {
        jsonString = jsonString.substring(0, jsonString.length - suffix.length);
      }
    } else {
      console.log("Using JSON object extraction method");
      // Alternative parsing method if the format changes
      const jsonStart = data.indexOf('{');
      const jsonEnd = data.lastIndexOf('}') + 1;
      
      if (jsonStart === -1 || jsonEnd === 0) {
        console.error("Could not find JSON object in response");
        throw new Error("Invalid response format from Google Sheets");
      }
      
      jsonString = data.substring(jsonStart, jsonEnd);
    }
    
    // Parse the extracted JSON
    const parsedData = JSON.parse(jsonString) as ProductsResponse;
    
    // Map the response data to our Product type
    const products = parseProductsFromResponse(parsedData);
    console.log("Products processed:", products.length);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error(`Failed to fetch products: ${error instanceof Error ? error.message : String(error)}`);
  }
};

const parseProductsFromResponse = (data: ProductsResponse): Product[] => {
  // Check if we have valid data
  if (!data.table || !data.table.rows) {
    console.error("Invalid data structure received from Google Sheets");
    return [];
  }

  // The Google Visualization API already separates header info in the 'cols' property,
  // so we can directly map all rows to products
  const products = data.table.rows
    .filter(row => row.c && row.c.length > 0) // Skip any empty rows
    .map((row, index) => {
      const cells = row.c;
      
      // Map cells to product properties (safely accessing properties)
      return {
        id: cells[0] && cells[0].v ? cells[0].v : index,
        name: cells[1] && cells[1].v ? cells[1].v : 'Unnamed Product',
        category: cells[2] && cells[2].v ? cells[2].v : 'Uncategorized',
        price: cells[3] && cells[3].v ? parseFloat(cells[3].v.toString()) : 0,
        description: cells[4] && cells[4].v ? cells[4].v : '',
        imageURL: cells[5] && cells[5].v ? cells[5].v : '',
        isAvailable: cells[6] && cells[6].v ? cells[6].v !== 'No' : true,
        featured: cells[7] && cells[7].v ? cells[7].v === 'Yes' : false,
        whatsAppMessage: cells[8] && cells[8].v ? cells[8].v : '',
        tags: cells[9] && cells[9].v ? cells[9].v : '',
        addedOn: cells[10] && cells[10].v ? cells[10].v : '',
        displayOrder: cells[11] && cells[11].v ? parseInt(cells[11].v.toString()) : 999,
        offer: cells[12] && cells[12].v ? cells[12].v : ''
      };
    });

  // Sort products by display order
  return products.sort((a, b) => a.displayOrder - b.displayOrder);
};

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
