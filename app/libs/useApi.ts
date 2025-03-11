export type getTenantResponse = {
  name: string;
  mainColor: string;
  secondColor: string;
};

export const useApi = () => ({
  async getTenant(slug: string): Promise<boolean | getTenantResponse> {
    let data: boolean | getTenantResponse = false;
    
    switch (slug) {
      case 'b7burger': 
        data = {
          name: 'b7burger',
          mainColor: '#FB9400',
          secondColor: "#FFF9F2",
        };
      break;
      case 'b7pizza': 
        data = {
          name: 'b7pizza',
          mainColor: '#0afb00',
          secondColor: "#b5ffb2",
        };
      break;
    }
    
    return data; 
  },

});