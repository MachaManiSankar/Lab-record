const $ = (id) => document.getElementById(id);
const KEY = 'student-tasks';
let tasks = JSON.parse(localStorage.getItem(KEY) || '[]');
let filter = 'all';

const save = () => localStorage.setItem(KEY, JSON.stringify(tasks));
const esc = (s) => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function render() {
  const shown = tasks.filter(t => filter === 'all' || (filter === 'done') === t.done);
  $('list').innerHTML = shown.map(t => `
    <li class="${t.priority} ${t.done ? 'done' : ''}">
      <input type="checkbox" data-id="${t.id}" ${t.done ? 'checked' : ''} />
      <div class="info"><div class="t">${esc(t.title)}</div>
        <small>${esc(t.subject || 'General')}${t.due ? ' · due ' + t.due : ''} · ${t.priority}</small></div>
      <button class="del" data-del="${t.id}">🗑</button>
    </li>`).join('') || '<p>No tasks yet.</p>';
  $('count').textContent = `${tasks.filter(t => !t.done).length} pending`;
}

$('form').addEventListener('submit', (e) => {
  e.preventDefault();
  tasks.push({ id: Date.now().toString(), title: $('title').value.trim(),
    subject: $('subject').value.trim(), due: $('due').value,
    priority: $('priority').value, done: false });
  save(); e.target.reset(); $('priority').value = 'Medium'; render();
});

$('list').addEventListener('click', (e) => {
  if (e.target.dataset.del) {
    tasks = tasks.filter(t => t.id !== e.target.dataset.del);
    save(); render();
  }
});

$('list').addEventListener('change', (e) => {
  const t = tasks.find(t => t.id === e.target.dataset.id);
  if (t) { t.done = !t.done; save(); render(); }
});

document.querySelector('.filters').addEventListener('click', (e) => {
  if (!e.target.dataset.f) return;
  filter = e.target.dataset.f;
  document.querySelectorAll('.filters button').forEach(b => b.classList.toggle('on', b === e.target));
  render();
});

render();
