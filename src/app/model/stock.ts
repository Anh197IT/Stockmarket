export class Stock {
    favorite = false;
    
    constructor( 
         public id: number,
        public name: string,
                public code: string,
                public price: number,
                public previousPrice: number,
                public exchange: string,
                favorite: boolean) {}
                
    
}