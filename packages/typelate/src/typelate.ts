import {providerQuestion} from "./questions/index.js"
import {Answers} from './models/choice.js'


export async function TYPElATE(): Promise<any> {
	const providerAnswer:Answers = await providerQuestion()
	if(!providerAnswer.project){
		throw (new Error("Harus menyertakan nama project"));
		
	}else{
		console.log(providerAnswer)
	}
}