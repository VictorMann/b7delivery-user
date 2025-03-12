import { Tenant } from "../types/Tenant";

export const useApi = () => ({
  async getTenant(slug: string): Promise<boolean | Tenant> {
    let data: boolean | Tenant = false;
    
    switch (slug) {
      case 'b7burger': 
        data = {
          slug: 'b7burger',
          name: 'B7Burger',
          mainColor: '#FB9400',
          secondColor: "#FFF9F2",
        };
      break;
      case 'b7pizza': 
        data = {
          slug: 'b7pizza',
          name: 'B7Pizza',
          mainColor: '#0afb00',
          secondColor: "#b5ffb2",
        };
      break;
    }
    
    return data; 
  },

});