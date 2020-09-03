import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";

const numberCollection=new NumbersCollection([1,24,0,3,-1,30])
const charactersCollection=new CharactersCollection("Xasdas");
const sorter=new Sorter(charactersCollection);
sorter.sort()
console.log(charactersCollection);