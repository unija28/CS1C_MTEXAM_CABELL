let createdlist = prompt(" you want to create a grocery list?(y/n)");

if(createdlist.toLowerCase() === 'y'){
    let numItems = parseInt(prompt("How many items are in your grocery list?"));
    let groceryList = [];
    for(let i = 0; i < numItems; i++){
        let item = prompt("Please Enter item");
        groceryList.push(item);
    }
    let groceryListSort = groceryList.toSorted();
    let groceryListReverse = groceryList.toReversed();
    alert(`Grocery List:\n ${groceryList}`);
    alert(`Sorted Grocery List:\n ${groceryListSort}`);
    alert(`Reversed Grocery List:\n ${groceryListReverse}`);
} else{
    alert("Grocery List Cancelled.");
}
