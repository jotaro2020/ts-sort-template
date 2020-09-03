import {NumbersCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";
import {LinkedList} from "./LinkedList";

const numberCollection=new NumbersCollection([1,24,0,3,-1,30])
numberCollection.sort()
console.log(numberCollection)


const charactersCollection=new CharactersCollection("Xasdas");
charactersCollection.sort();
console.log(charactersCollection);

const linkedList=new LinkedList();
linkedList.add(540);
linkedList.add(40);
linkedList.add(50);
linkedList.add(-2);
linkedList.add(20);

linkedList.sort()
linkedList.print()
