function copyToClipboard (text) {
  navigator.clipboard.writeText(text);
};

function actionButtonClick (text) {
  copyToClipboard(text);
}

const azureDevOpsActionButtonId = 'devops-pr-branch-copy__copy-button';
const azureDevOpsActionButton = `
<div id="${azureDevOpsActionButtonId}" class="bolt-clipboard-button hash-copy-button repos-commit-header-hash"><button aria-label="Copy to clipboard" class="bolt-button bolt-icon-button enabled subtle icon-only bolt-focus-treatment" data-focuszone="" data-is-focusable="true" role="button" tabindex="0" type="button"><span aria-hidden="true" class="left-icon flex-noshrink fabric-icon ms-Icon--Copy medium"></span></button></div>
`;

function attemptCopyButtonRender() {
  const prHeaderBranchCollection = document.getElementsByClassName('pr-header-branches');
  if (!!prHeaderBranchCollection?.length && !!prHeaderBranchCollection[0]?.children?.length) {
    const prHeaderBranches = prHeaderBranchCollection[0];
    const branchAnchor = prHeaderBranches?.children[0];
    const copyText = branchAnchor?.innerHTML || '';

    if (!!prHeaderBranches?.innerHTML?.length) {
      let copyActionButton = document.getElementById(azureDevOpsActionButtonId);
      // If the button already exists, don't add a new one
      if (!copyActionButton) {
        prHeaderBranches.innerHTML += azureDevOpsActionButton;
        copyActionButton = document.getElementById(azureDevOpsActionButtonId);
        if (!!copyActionButton) {
          prHeaderBranches.append(copyActionButton);

          copyActionButton.addEventListener('click', actionButtonClick(copyText));
        }
      }
    }
  }
}

attemptCopyButtonRender();

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // listen for messages sent from background.js
    if (request.message === 'devops-route-change') {
      attemptCopyButtonRender();
    }
});
