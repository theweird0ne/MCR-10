import { inventoryData } from "../data/inventory";

export const filterReducer=(acc,action)=>{
	switch(action.type){
		case 'filter_department':			
				if(action.payload==='all'){
					return inventoryData;
				}else{
					return [...acc].filter(({department})=>department===action.payload);
				}
		case 'filter_low_stock':
			return [...acc].filter(({stock})=>stock<=10);
		case 'sort_items':
			if(action.payload==='price'){
				return [...acc].sort((a,b)=>a.price-b.price);
			}else if(action.payload==='stock'){
				return [...acc].sort((a,b)=>a.stock-b.stock);
			}else{
				return [...acc].sort((a,b)=>a.name.localeCompare(b.name));
			}
		default:
			return acc;
	}
}
