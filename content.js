function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

function actionButtonClick(text) {
  copyToClipboard(text);
}

const prHeaderBranchCollection =
  document.getElementsByClassName('pr-header-branches');

if (
  !!prHeaderBranchCollection?.length &&
  !!prHeaderBranchCollection[0]?.children?.length
) {
  const prHeaderBranches = prHeaderBranchCollection[0];
  const branchAnchor = prHeaderBranches?.children[0];

  const copyText = branchAnchor?.innerHTML || '';

  const azureDevOpsActionButton =
    '<button id="devopsPrBranchCopy" title="Copy source branch name" aria-label="Copy to clipboard" class="bolt-button bolt-icon-button enabled subtle icon-only bolt-focus-treatment" data-focuszone="" data-is-focusable="true" role="button" tabindex="0" type="button"><span aria-hidden="true" class="left-icon flex-noshrink fabric-icon ms-Icon--Copy medium"></span></button>';
  prHeaderBranches.innerHTML += azureDevOpsActionButton;
  const button = document.getElementById('devopsPrBranchCopy');

  button.addEventListener('click', () => actionButtonClick(copyText), false);
}
