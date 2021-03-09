import "./styles.css";

export default function App() {
  return (
    // <div className="App">
    //   <a href="./.netlify/functions/hello-world">say hello</a>
    // </div>
    <form class="form-example" action="./.netlify/functions/hello-world">
      <label>
        What’s your name?
        <input name="name" />
      </label>
      <button class="button" type="submit">
        Say helloo!
      </button>
    </form>
  );
}
