const prHeaderBranchCollection = document.getElementsByClassName('pr-header-branches');
console.log('prHeaderBranchCollection: ', prHeaderBranchCollection);

function copyToClipboard (text) {
  navigator.clipboard.writeText(text);
};

function actionButtonClick (text) {
  copyToClipboard(text);
}

const azureDevOpsActionButton = `
<div class="bolt-clipboard-button hash-copy-button repos-commit-header-hash"><button aria-label="Copy to clipboard" class="bolt-button bolt-icon-button enabled subtle icon-only bolt-focus-treatment" data-focuszone="" data-is-focusable="true" role="button" tabindex="0" type="button"><span aria-hidden="true" class="left-icon flex-noshrink fabric-icon ms-Icon--Copy medium"></span></button></div>
`;

if (!!prHeaderBranchCollection?.length && !!prHeaderBranchCollection[0]?.children?.length) {
  const prHeaderBranches = prHeaderBranchCollection[0];
  const branchAnchor = prHeaderBranches?.children[0];
  console.log('branchAnchor: ', branchAnchor);
  const copyText = branchAnchor?.innerHTML || '';
  prHeaderBranches.innerHTML += azureDevOpsActionButton;
  const copyActionButton = document.getElementsByClassName('bolt-clipboard-button');
  copyActionButton.addEventListener('click', actionButtonClick(copyText));
  prHeaderBranches.append(copyActionButton);
}
