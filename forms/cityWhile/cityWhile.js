
let continues = true
cities = []

while (continues == true) {
  yesNo = prompt("Do you have another city to enter: ")
  if (yesNo == "yes") {
  city = prompt("Enter a city: ")
  cities.push(city)
} else {
  continues = false
  }
  }

count = 0
while(cities.length !== count) {
  let name = cities[count]
  console.log(name.toLowerCase())
  count ++

