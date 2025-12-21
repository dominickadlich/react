// interface TeaOrCoffee {
//     name: string,
//     plant: string,
//     caffeine: string,
//     age: string,
// }

function Drink({ name }: { name: string }) {
  let plant, caffeine, age;
  if (name === "tea") {
    plant = "leaf";
    ((caffeine = "15–70 mg/cup"), (age = "4,000 years"));
  } else {
    ((plant = "bean"), (caffeine = "80–185 mg/cup"), (age = "1,000+ years"));
  }
  return (
    <section>
      <dt>Part of plant</dt>
      <dd>{plant}</dd>
      <dt>Caffeine content</dt>
      <dd>{caffeine}</dd>
      <dt>Age</dt>
      <dd>4,000 years</dd>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
