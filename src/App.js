import "./styles.css";

export default function App() {
  function longestWord(sentence) {
    const words = sentence.split(" ");
    let longest = words[0];

    for (let i = 1; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }

    return longest;
  }

  const sentence = "JavaScript is an amazing programming language";
  console.log(longestWord(sentence));

  function countUppercase(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= "A" && str[i] <= "Z") {
        count++;
      }
    }
    return count;
  }

  function countUppercaseRegex(str) {
    const matches = str.match(/[A-Z]/g);
    return matches ? matches.length : 0;
  }

  console.log(countUppercase("Hello World JavaScript"));

  function factorial(n) {
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }

  console.log(factorial(5));

  return (
    <div className="app">
      <h1>⚛️ react playground!</h1>
      <p>
        This is your starting point. Edit <code>App.js</code> to see your
        changes come to life.
      </p>
      <p>Crafted with care by Tanay Pratap ❤️ - Happy coding!</p>
    </div>
  );
}
