import data0 from '../../data/sample_db_0km.json';
import data5 from '../../data/sample_db_5km.json';
import data10 from '../../data/sample_db_10km.json';
import data15 from '../../data/sample_db_15km.json';
import data20 from '../../data/sample_db_20km.json';
import data25 from '../../data/sample_db_25km.json';
export function getDist(dist){
    if(dist==='0')
    {
        return  data0;
    }
    if(dist==='5')
        return  data5;
    if(dist==='10')
        return  data10;
    if(dist==='15')
    {
        console.log("In func",data15)
        return  data15;
    }
    if(dist==='20')
        return  data20;
    if(dist==='25')
        return  data25;
    return "Else";
}