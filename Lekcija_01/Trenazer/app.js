// ====== STEPS DATA ======
const STEPS = [
  {
    id: 0,
    icon: '🔍',
    title: 'Исследование',
    goal: 'Понять рынок, конкурентов, осуществимость идеи.',
    instructions: [
      'Открой новый чат в Antigravity',
      'Напиши: <em>«Проведи исследование рынка для [описание твоей идеи]. Покажи конкурентов, аналоги, потенциальную аудиторию»</em>',
      'Изучи результат, задай уточняющие вопросы'
    ],
    checklist: [
      'Конкуренты и аналоги изучены',
      'Целевая аудитория определена',
      'Осуществимость подтверждена',
      'Результат сохранён в 0_исследование.md'
    ],
    prompt: 'Проведи исследование рынка для [описание твоей идеи]. Покажи конкурентов, аналоги, потенциальную аудиторию.',
    tips: 'Открой новый чат в Antigravity. Изучи результат, задай уточняющие вопросы. Сохрани ключевые выводы.'
  },
  {
    id: 1,
    icon: '💡',
    title: 'Идея',
    goal: 'Описать идею максимально подробно своими словами. Чем детальнее — тем лучше результат.',
    instructions: [
      'Опиши идею <strong>своими словами</strong> — не стесняйся, пиши как думаешь',
      'Ответь на вопросы: какую <strong>проблему</strong> решает? <strong>Кто</strong> пользователь? Какие <strong>данные</strong> на входе/выходе? В чём <strong>уникальность</strong>?',
      'Отправь описание в Antigravity',
      'Прикрепи файл <code>1_идея.md</code>'
    ],
    checklist: [
      'Идея описана своими словами',
      'Проблема чётко сформулирована',
      'Целевая аудитория определена',
      'Входные и выходные данные описаны',
      'Нейронка структурировала идею',
      'Результат проверен и скорректирован',
      'Сохранено в 1_идея.md → нажал Accept All'
    ],
    prompt: 'Изучи мою идею перед разработкой и добавь её в файл идеи.\nСтруктурируй: проблема, решение, целевая аудитория,\nвходные/выходные данные, уникальность.',
    tips: 'Отвечай на вопросы: какую проблему решает? Кто пользователь? Какие данные на входе/выходе? В чём уникальность?'
  },
  {
    id: 2,
    icon: '📋',
    title: 'Техническое задание',
    goal: 'Превратить идею в детальные инструкции для нейронки. ТЗ = скелет продукта.',
    instructions: [
      'Прикрепи в чат файл <code>1_идея.md</code>',
      'Прикрепи пустой файл <code>2_техническое_задание.md</code>',
      'Напиши промпт (ниже)',
      'Проверь результат — это ТЗ больше для нейронки, но пробегись глазами'
    ],
    checklist: [
      'ТЗ сгенерировано',
      'Функциональные требования перечислены',
      'Технологический стек определён',
      'Результат проверен',
      'Сохранено в 2_техническое_задание.md → Accept All'
    ],
    prompt: 'На основе моей идеи [прикрепить 1_идея.md]\nсформируй техническое задание [прикрепить 2_техническое_задание.md]',
    tips: 'Мелкие правки → правь прямо в файле. Глобальные проблемы → напиши в чат. Всё плохо → Reject All и переформулируй.'
  },
  {
    id: 3,
    icon: '🏗️',
    title: 'Архитектура проекта',
    goal: 'Создать файловую структуру (директорию) будущего кода. Без порядка = хаос.',
    instructions: [
      'Прикрепи в чат <code>1_идея.md</code> + <code>2_техническое_задание.md</code>',
      'Попроси сформировать архитектуру'
    ],
    checklist: [
      'Файловая структура создана',
      'Компоненты системы описаны',
      'Модель данных определена (если есть БД)',
      'API эндпоинты описаны (если есть)',
      'Сохранено в 3_архитектура_проекта.md → Accept All'
    ],
    prompt: 'На основе моей идеи [прикрепить] и технического задания [прикрепить]\nсформируй архитектуру проекта — файловую структуру и компоненты.\nЗапиши в [прикрепить 3_архитектура_проекта.md]',
    tips: 'Используй Antigravity для определения «скелета» файлов до начала кодинга.'
  },
  {
    id: 4,
    icon: '🎨',
    title: 'Требования к дизайну',
    goal: 'Определить внешний вид продукта. Дизайн есть у всего — даже у Telegram-бота.',
    instructions: [
      'Прикрепи в чат все предыдущие файлы (идея + ТЗ + архитектура)',
      'Опиши, как хочешь, чтобы продукт выглядел'
    ],
    checklist: [
      'UI/UX концепция описана',
      'Цветовая палитра выбрана',
      'Компоненты интерфейса определены',
      'Сохранено в 4_требования_к_дизайну.md → Accept All'
    ],
    prompt: 'На основе моей идеи, ТЗ и архитектуры\nсформируй требования к дизайну продукта.\nВключи: цветовую палитру, стиль, компоненты интерфейса.\nЕсли это бот — опиши тексты кнопок, эмодзи, структуру меню.\nЗапиши в 4_требования_к_дизайну.md',
    tips: 'Опиши, как хочешь, чтобы продукт выглядел. Прикрепи все предыдущие файлы (идея + ТЗ + архитектура).'
  },
  {
    id: 5,
    icon: '🚀',
    title: 'Запуск продукта локально',
    goal: 'Сгенерировать код и запустить продукт на своём компьютере.',
    instructions: [
      'Прикрепи в чат ТЗ + архитектуру + дизайн',
      'Попроси разработать и запустить'
    ],
    checklist: [
      'Код сгенерирован',
      'Продукт запускается без ошибок',
      'Базовая функциональность работает',
      'Сохранено в 5_запуск_продукта.md'
    ],
    prompt: 'На основе технического задания, архитектуры и требований к дизайну\nразработай продукт и запусти его локально.',
    tips: '⚠️ Если зависает (Windows): нажми Стоп и попроси продолжить. Переключи модель: Gemini → Claude Opus.'
  },
  {
    id: '5.1',
    icon: '✅',
    title: 'Задачи',
    goal: 'Создать полный список задач для нейронки, чтобы она сама себя проверяла.',
    instructions: [
      'Попроси Antigravity составить список задач на основе ТЗ'
    ],
    checklist: [
      'Все задачи перечислены',
      'Приоритеты расставлены',
      'Можно отслеживать прогресс',
      'Сохранено в 5.1_задачи.md'
    ],
    prompt: 'На основе технического задания составь полный список задач\nдля разработки продукта. Расставь приоритеты (Высокий / Средний / Низкий).\nЗапиши в 5.1_задачи.md',
    tips: 'Этот список — твой чеклист и чеклист для нейронки. Используй его для отслеживания прогресса.'
  },
  {
    id: 6,
    icon: '🧪',
    title: 'Тестирование',
    goal: 'Проверить, что всё работает корректно. Найти косяки до деплоя.',
    instructions: [
      'Протестируй каждую функцию из ТЗ',
      'Записывай баги и несоответствия',
      'Отправляй баг-репорты в чат Antigravity для исправления'
    ],
    checklist: [
      'Все функции протестированы',
      'Баги записаны и исправлены',
      'Повторное тестирование пройдено',
      'Если сломалось → Reject All → откат',
      'Сохранено в 6_тестирование.md'
    ],
    prompt: null,
    tips: 'Работает продукт или не работает — вот единственный критерий. Не лезь в код, не оценивай его качество. Важен результат.'
  },
  {
    id: 7,
    icon: '🌐',
    title: 'Деплой',
    goal: 'Разместить продукт на сервере, чтобы он работал не только на твоём компе.',
    instructions: [
      'Выбери хостинг (Vercel, Railway, VPS)',
      'Настрой переменные окружения',
      'Подключи базу данных (Supabase)',
      'Залей код'
    ],
    checklist: [
      'Хостинг выбран',
      'Проект задеплоен',
      'Переменные окружения настроены',
      'Продукт доступен по URL',
      'Сохранено в 7_деплой.md'
    ],
    prompt: 'Задеплой текущий проект на [платформа].\nНастрой переменные окружения и подключение к Supabase.',
    tips: 'Используй Vercel или Railway для начальных тестов. Supabase вместо Google Sheets — масштабируется лучше.'
  },
  {
    id: 8,
    icon: '🐛',
    title: 'Дебаггинг',
    goal: 'Исправить конкретные баги, найденные после деплоя.',
    instructions: [
      'Тестируй продукт на сервере (не локально!)',
      'Записывай каждый баг',
      'Отправляй описание бага в Antigravity для фикса'
    ],
    checklist: [
      'Все критические баги найдены',
      'Баги исправлены',
      'Повторное тестирование на сервере пройдено',
      'Сохранено в 8_дебаггинг.md'
    ],
    prompt: null,
    tips: 'Тестируй продукт НА СЕРВЕРЕ (не локально!). Записывай каждый баг и отправляй описание в Antigravity.'
  },
  {
    id: 9,
    icon: '🎉',
    title: 'Релиз',
    goal: 'Финальный запуск для пользователей.',
    instructions: [
      'Убедись, что все баги исправлены',
      'Проведи финальное тестирование',
      'Залей код на GitHub (бэкап!)',
      'Открой доступ пользователям',
      'Подготовь документацию'
    ],
    checklist: [
      'Все баги исправлены',
      'Финальное тестирование пройдено',
      'Код залит на GitHub (бэкап!)',
      'Продукт доступен пользователям',
      'Документация готова',
      'Сохранено в 9_релиз.md'
    ],
    prompt: null,
    tips: 'GitHub = библиотека — ищи готовые решения, а не пиши с нуля. Делай бэкапы!'
  },
  {
    id: 10,
    icon: '🔁',
    title: 'Пост-релиз исследование',
    goal: 'Собрать обратную связь, аналитику, спланировать улучшения → Возврат к Этапу 0.',
    instructions: [
      'Собери обратную связь от пользователей',
      'Подключи и изучи аналитику',
      'Составь список улучшений',
      'Спланируй следующую итерацию → перейди к Этапу 0'
    ],
    checklist: [
      'Обратная связь от пользователей собрана',
      'Аналитика подключена и изучена',
      'Список улучшений составлен',
      'Следующая итерация спланирована → перейди к Этапу 0'
    ],
    prompt: null,
    tips: 'Не сдерживай себя — если можешь продвинуться на 3 этапа за день, делай! Модель по умолчанию → Claude Opus.'
  }
];

// ====== STATE ======
let currentStep = 0;
let projectData = {};
let checklistState = {};
let saveTimeout = null;

// ====== INIT ======
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  loadTheme();
  renderDots();
  renderStep(currentStep);
  updateProgress();

  // Project name
  const nameInput = document.getElementById('projectName');
  nameInput.value = projectData._projectName || '';
  nameInput.addEventListener('input', (e) => {
    projectData._projectName = e.target.value;
    scheduleSave();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    // Don't intercept if user is typing in an input/textarea
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextStep();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      prevStep();
    } else if (e.key === 'Escape') {
      hideResetModal();
      hideRefPanel();
    }
  });

  // Hide keyboard hint after first interaction
  setTimeout(() => {
    const hint = document.getElementById('keyboardHint');
    if (hint) hint.style.opacity = '0';
  }, 5000);
});

// ====== PERSISTENCE ======
function loadData() {
  try {
    const saved = localStorage.getItem('vibecoding_trainer');
    if (saved) {
      const parsed = JSON.parse(saved);
      projectData = parsed.projectData || {};
      checklistState = parsed.checklistState || {};
      currentStep = parsed.currentStep || 0;
    }
  } catch (e) { console.error('Load error:', e); }
}

function saveData() {
  try {
    localStorage.setItem('vibecoding_trainer', JSON.stringify({
      projectData,
      checklistState,
      currentStep
    }));
    showSaveIndicator();
  } catch (e) { console.error('Save error:', e); }
}

function scheduleSave() {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(saveData, 400);
}

function showSaveIndicator() {
  const el = document.getElementById('saveIndicator');
  if (el) {
    el.classList.add('visible');
    setTimeout(() => el.classList.remove('visible'), 1500);
  }
}

// ====== DARK MODE ======
function loadTheme() {
  const theme = localStorage.getItem('vibecoding_theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeIcon(theme);
}

function toggleDarkMode() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('vibecoding_theme', next);
  updateThemeIcon(next);
  showToast(next === 'dark' ? '🌙 Тёмная тема' : '☀️ Светлая тема');
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('darkModeToggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ====== PROGRESS DOTS ======
function renderDots() {
  const container = document.getElementById('stepsDots');
  container.innerHTML = '';
  STEPS.forEach((step, i) => {
    const dot = document.createElement('button');
    dot.className = 'step-dot';
    dot.textContent = step.id;
    dot.title = `${step.icon} ${step.title}`;
    dot.setAttribute('data-tooltip', `${step.icon} ${step.title}`);
    dot.onclick = () => goToStep(i);
    container.appendChild(dot);
  });
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll('.step-dot');
  dots.forEach((dot, i) => {
    dot.classList.remove('active', 'completed', 'has-content');
    if (i === currentStep) {
      dot.classList.add('active');
    } else if (isStepComplete(i)) {
      dot.classList.add('completed');
    } else if (hasStepContent(i)) {
      dot.classList.add('has-content');
    }
  });
}

function isStepComplete(index) {
  const step = STEPS[index];
  const clKey = `cl_${step.id}`;
  const checked = checklistState[clKey] || [];
  return checked.length === step.checklist.length && step.checklist.length > 0;
}

function hasStepContent(index) {
  const step = STEPS[index];
  const key = `step_${step.id}`;
  return (projectData[key] && projectData[key].trim().length > 0);
}

// ====== PROGRESS BAR ======
function updateProgress() {
  let totalItems = 0;
  let checkedItems = 0;
  STEPS.forEach(step => {
    totalItems += step.checklist.length;
    const clKey = `cl_${step.id}`;
    checkedItems += (checklistState[clKey] || []).length;
  });
  const pct = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressPercent').textContent = pct + '%';
  updateDots();

  // If 100% — celebrate!
  if (pct === 100) {
    showToast('🎉 Все этапы завершены! Поздравляем!');
    launchConfetti();
  }
}

// ====== RENDER STEP ======
function renderStep(index) {
  const step = STEPS[index];
  const key = `step_${step.id}`;
  const card = document.getElementById('stepCard');

  // Trigger animation
  card.style.animation = 'none';
  card.offsetHeight; // reflow
  card.style.animation = '';

  // Header
  document.getElementById('stepBadge').innerHTML = `<span>${step.icon}</span> Этап ${step.id}`;
  document.getElementById('stepTitle').textContent = `${step.icon} ${step.title}`;
  document.getElementById('stepGoal').textContent = step.goal;

  // Instructions
  const instrSection = document.getElementById('instructionsSection');
  const instrList = document.getElementById('instructionsList');
  if (step.instructions && step.instructions.length > 0) {
    instrSection.style.display = 'block';
    instrList.innerHTML = '';
    step.instructions.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = item;
      instrList.appendChild(li);
    });
  } else {
    instrSection.style.display = 'none';
  }

  // Checklist
  const checklistEl = document.getElementById('checklist');
  const clKey = `cl_${step.id}`;
  const checked = checklistState[clKey] || [];
  checklistEl.innerHTML = '';
  step.checklist.forEach((item, i) => {
    const li = document.createElement('li');
    li.className = checked.includes(i) ? 'checked' : '';
    li.innerHTML = `<span class="check-icon">✓</span><span>${item}</span>`;
    li.onclick = () => toggleCheck(step.id, i, li);
    checklistEl.appendChild(li);
  });

  // Prompt
  const promptSection = document.getElementById('promptSection');
  if (step.prompt) {
    promptSection.style.display = 'block';
    document.getElementById('promptText').textContent = step.prompt;
  } else {
    promptSection.style.display = 'none';
  }

  // Tips
  const tipsSection = document.getElementById('tipsSection');
  if (step.tips) {
    tipsSection.style.display = 'block';
    document.getElementById('tipsText').textContent = step.tips;
  } else {
    tipsSection.style.display = 'none';
  }

  // Notes
  const textarea = document.getElementById('stepTextarea');
  textarea.value = projectData[key] || '';
  updateCharCount();

  // Navigation
  document.getElementById('prevBtn').disabled = index === 0;
  document.getElementById('nextBtn').disabled = index === STEPS.length - 1;
  document.getElementById('stepCounter').textContent = `${index + 1} / ${STEPS.length}`;

  // Update next button text
  const nextBtn = document.getElementById('nextBtn');
  if (index === STEPS.length - 1) {
    nextBtn.innerHTML = 'Финиш 🏁';
  } else {
    nextBtn.innerHTML = 'Далее →';
  }

  // Scroll to top of card
  card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ====== CHECKLIST ======
function toggleCheck(stepId, itemIndex, li) {
  const clKey = `cl_${stepId}`;
  if (!checklistState[clKey]) checklistState[clKey] = [];
  const arr = checklistState[clKey];
  const idx = arr.indexOf(itemIndex);
  if (idx > -1) {
    arr.splice(idx, 1);
    li.classList.remove('checked');
  } else {
    arr.push(itemIndex);
    li.classList.add('checked');
  }
  scheduleSave();
  updateProgress();

  // Check if this step is now complete
  const stepIndex = STEPS.findIndex(s => s.id === stepId);
  if (stepIndex >= 0 && isStepComplete(stepIndex)) {
    showToast(`✅ Этап ${stepId} завершён!`);
    launchConfetti();
  }
}

// ====== TEXT INPUT ======
function onTextInput(el) {
  const step = STEPS[currentStep];
  const key = `step_${step.id}`;
  projectData[key] = el.value;
  updateCharCount();
  scheduleSave();
}

function updateCharCount() {
  const textarea = document.getElementById('stepTextarea');
  const count = document.getElementById('charCount');
  count.textContent = `${textarea.value.length} символов`;
}

// ====== NAVIGATION ======
function nextStep() {
  if (currentStep < STEPS.length - 1) {
    currentStep++;
    saveData();
    renderStep(currentStep);
    updateProgress();
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    saveData();
    renderStep(currentStep);
    updateProgress();
  }
}

function goToStep(index) {
  if (index >= 0 && index < STEPS.length) {
    currentStep = index;
    saveData();
    renderStep(currentStep);
    updateProgress();
  }
}

// ====== COPY PROMPT ======
function copyPrompt() {
  const text = document.getElementById('promptText').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.copy-btn');
    const original = btn.textContent;
    btn.textContent = '✓ Скопировано!';
    showToast('📋 Промпт скопирован');
    setTimeout(() => btn.textContent = original, 1500);
  }).catch(() => {
    // Fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('📋 Промпт скопирован');
  });
}

// ====== EXPORT ======
function exportMarkdown() {
  const name = projectData._projectName || 'Без названия';
  const date = new Date().toLocaleDateString('ru-RU');
  let md = `# 📋 Проект: ${name}\n\n`;
  md += `> Дата экспорта: ${date}\n\n`;
  md += `---\n\n`;

  STEPS.forEach((step) => {
    const key = `step_${step.id}`;
    const text = projectData[key] || '_Не заполнено_';
    const clKey = `cl_${step.id}`;
    const checked = checklistState[clKey] || [];

    md += `## ${step.icon} Этап ${step.id}: ${step.title}\n\n`;
    md += `**Цель:** ${step.goal}\n\n`;

    // Instructions
    if (step.instructions && step.instructions.length > 0) {
      md += `### Что делать\n\n`;
      step.instructions.forEach((item, i) => {
        // Strip HTML
        const clean = item.replace(/<[^>]*>/g, '');
        md += `${i + 1}. ${clean}\n`;
      });
      md += `\n`;
    }

    md += `### Чеклист\n\n`;
    step.checklist.forEach((item, i) => {
      const mark = checked.includes(i) ? 'x' : ' ';
      md += `- [${mark}] ${item}\n`;
    });

    if (step.prompt) {
      md += `\n### Промпт\n\n\`\`\`\n${step.prompt}\n\`\`\`\n`;
    }

    md += `\n### Заметки\n\n${text}\n\n`;
    md += `---\n\n`;
  });

  const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${name.replace(/\s+/g, '_')}_проект.md`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('📥 Экспорт завершён');
}

// ====== RESET ======
function showResetModal() {
  document.getElementById('resetModal').classList.add('active');
}

function hideResetModal() {
  document.getElementById('resetModal').classList.remove('active');
}

function confirmReset() {
  localStorage.removeItem('vibecoding_trainer');
  projectData = {};
  checklistState = {};
  currentStep = 0;
  document.getElementById('projectName').value = '';
  renderDots();
  renderStep(0);
  updateProgress();
  hideResetModal();
  showToast('🗑️ Прогресс сброшен');
}

// ====== REFERENCE PANEL ======
function showRefPanel() {
  document.getElementById('refOverlay').classList.add('active');
  document.getElementById('refPanel').classList.add('active');
}

function hideRefPanel() {
  document.getElementById('refOverlay').classList.remove('active');
  document.getElementById('refPanel').classList.remove('active');
}

function switchRefTab(tabId) {
  // Deactivate all tabs & content
  document.querySelectorAll('.ref-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.ref-tab-content').forEach(c => c.classList.remove('active'));

  // Activate selected
  document.querySelector(`.ref-tab[data-tab="${tabId}"]`).classList.add('active');
  document.getElementById(`tab-${tabId}`).classList.add('active');
}

// ====== TOAST ======
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// ====== CONFETTI ======
function launchConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#6366f1', '#14b8a6', '#22c55e', '#f59e0b', '#ef4444', '#818cf8', '#f472b6'];
  const particles = [];

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.4 - canvas.height * 0.1,
      w: Math.random() * 8 + 4,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2,
      rot: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.15,
      life: 1
    });
  }

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach(p => {
      if (p.life <= 0) return;
      alive = true;
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.08;
      p.rot += p.rotSpeed;
      p.life -= 0.008;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    frame++;
    if (alive && frame < 200) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animate();
}
