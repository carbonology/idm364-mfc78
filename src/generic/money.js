export default function money(num){
    var pos = num.toString().indexOf(".");
    var newMoney = num.toString().substring(0, pos + 3);

    if (num === 0){
        return `$0`
    }
    
    if (newMoney.substring(pos, newMoney.length).length < 3){
        return `$${newMoney}0`;
    } else {
        return `$${newMoney}`;
    }
}