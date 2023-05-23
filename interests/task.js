const interestMain = document.querySelector('.interests_main');

interestMain.addEventListener('click', (e) => {
  const target = e.target;
  const isChecked = target.checked;

  target.closest('.interest').querySelectorAll('ul .interest__check').forEach(target => {
    target.checked = isChecked;
  });

  const interests = [...interestMain.querySelectorAll('.interest__check')];
  
  interests.reverse().forEach(target => {
    const nestInterests = target.closest('.interest').querySelector('ul');
    
    if (!nestInterests) return

    const targetNestInterests = nestInterests.querySelectorAll('.interest__check').length;
    const checkedNestInterests = nestInterests.querySelectorAll(':checked').length;

    if (targetNestInterests === checkedNestInterests) {
      target.checked = true;
      target.indeterminate = false;
      return
    };
    if (!checkedNestInterests) {
      target.checked = false;
      target.indeterminate = false;
      return
    };
    target.indeterminate = true;
  });
})