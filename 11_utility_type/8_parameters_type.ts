/**
 * parameters type
 */

function parameters(x:string, y:number, z:boolean){}


type ParaType= Parameters<typeof parameters>;
type ParaType2 = Parameters<((one:number)=>void)>;