const wechatDialog = document.getElementById('wechat-dialog');
const wechatTrigger = document.querySelector('.wechat-trigger');
wechatTrigger.addEventListener('click', () => wechatDialog.showModal());
wechatDialog.addEventListener('click', (event) => {
  if (event.target !== wechatDialog) return;
  const bounds = wechatDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) {
    wechatDialog.close();
  }
});