const HTTP_TIMEOUT: number = 60000;
export interface Enviroment{
mainApi:string,

timeout:number
}





export const Test:Enviroment={
	mainApi:'https://d86nlrrsul.execute-api.eu-west-1.amazonaws.com/dev',

	 timeout: HTTP_TIMEOUT

}
export const ENV:Enviroment=Test;
