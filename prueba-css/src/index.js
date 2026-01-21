var arrayTest = [1, 2, 3, 3, 2, 1, 4];

document.getElementById("app").innerHTML = `
<div class="page-container">

  <header class="header">
    <h1 id="title">Unique Element Challenge</h1>
    <img class="logo" src="/prueba-css/src/assets/logo.svg" alt="ancert" />
  </header>

  <main class="content">
    <section class="instructions">
      <h2 class="instructions-title">Target</h2>
      <p class="text">Find the unique value in the array that is not duplicated. Use the <b>dubbed</b> function to return the unique element.</p>

      <h2 class="instructions-title">Considerations</h2>
      <ul class="list">
        <li>Values are duplicated only twice.</li>
        <li>There is only one non duplicate value.</li>
        <li>The non duplicate value can be placed anywhere on the array.</li>
        <li>The result must be an integer.</li>
      </ul>
    </section>

    <section class="data">
      <div class="test-data">
        <h2 class="card-title">Test Data</h2>
        <div>${arrayTest}</div>
      </div>

      <div class="results-cards">
        <div class="data-card expected">
          <h2 class="card-title">Expected result</h2>
          <div>4</div>
        </div>

        <div class="data-card your-result">
          <h2 class="card-title">Your Result</h2>
          <div>4</div>
        </div>
      </div>
    </section>
  </main>

</div>
`;
