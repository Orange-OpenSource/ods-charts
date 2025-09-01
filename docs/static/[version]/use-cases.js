var addViewCode = (prefixId = '', htmlId = 'htmlId', codeId = 'codeId') => {
  var htmlElt = document.getElementById(prefixId + htmlId);
  var innitHtmlDoc = htmlElt.innerHTML;
  document.write(`

    <div class="accordion py-3" id="${prefixId}viewCodeAcc">
    <div class="accordion-item">
      <h2 class="accordion-header" id="${prefixId}viewCodeHead">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#${prefixId}${htmlId}_viewCode"
          aria-expanded="false"
          aria-controls="${prefixId}${htmlId}_viewCode"
        >
          View code
        </button>
      </h2>
      <div
        id="${prefixId}${htmlId}_viewCode"
        class="accordion-collapse collapse"
        aria-labelledby="${prefixId}viewCodeHead"
        data-bs-parent="#${prefixId}viewCodeAcc"
      >
        <div class="accordion-body w-100">
          <div class="border border-subtle position-relative mt-2 p-2">
            <div class="display-5">HTML</div>
            <code>
              <pre id="${prefixId}${htmlId}_html"></pre>
            </code>
          </div>
          <div class="border border-subtle position-relative mt-2 p-2">
            <div class="display-5">JavaScript / ODS Charts</div>
            <code>
              <pre id="${prefixId}${htmlId}_code"></pre>
            </code>
          </div>
        </div>
      </div>
    </div>
  </div>
    `);

  window.setTimeout(() => {
    document.getElementById(prefixId + htmlId + '_html').innerText = innitHtmlDoc;
    document.getElementById(prefixId + htmlId + '_code').innerText = document.getElementById(prefixId + codeId).text;
  });
};
