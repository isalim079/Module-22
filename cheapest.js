const phones = [
    {name: "Samaung", color: "Red", camera: 108, storage: "128GB", price: 29999},
    {name: "Nokia", color: "Red", camera: 60, storage: "128GB", price: 39999},
    {name: "Xiaomi", color: "Black", camera: 29, storage: "128GB", price: 19999},
    {name: "Iphone", color: "Orange", camera: 28, storage: "256GB", price: 31999},
    {name: "Motorolla", color: "Yeollow", camera: 10, storage: "12GB", price: 42999},
    {name: "HTC", color: "Red", camera: 60, storage: "28GB", price: 78999},
    {name: "Oppo", color: "Red", camera: 40, storage: "28GB", price: 65999},
    {name: "Vivo", color: "Blue", camera: 10, storage: "165GB", price: 21999},
];
function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if(phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones)
console.log("This phone is cheapest: ", mySelection);