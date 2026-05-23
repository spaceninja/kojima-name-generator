// === Utilities ===

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function titleCase(string) {
  return string
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(' ');
}

function el(tag, attrs, ...children) {
  const node = document.createElement(tag);
  if (attrs) {
    for (const [k, v] of Object.entries(attrs)) {
      if (v === true || v === '') {
        node.setAttribute(k, '');
      } else if (v !== false && v != null) {
        node.setAttribute(k, v);
      }
    }
  }
  for (const child of children) {
    node.append(child instanceof Node ? child : String(child));
  }
  return node;
}

// === Questions ===
// Each question defines how to render an input. Target ('first', 'last', 'middle',
// 'currentCondition') is specified by the category that uses the question, not here.

const QUESTIONS = {
  fullName: {
    type: 'fullName',
    legend: 'What is your full name?',
  },
  personality: {
    type: 'text',
    label: 'If you had to define your personality in one word, what would it be?',
  },
  skill: {
    type: 'text',
    label: 'What is something you are good at?',
    help: 'Verb ending in “-ing”.',
  },
  nameHomonym: {
    type: 'text',
    label: 'What is a word your name kind of sounds like?',
    help: 'Emphasis on “kind of.” e.g. Brian: Brain; Travis: Starfish; Scott: Scorpion;',
  },
  faveKurtRussell: {
    type: 'select',
    label: 'Who is your favorite film character?',
    help: 'Must be played by Kurt Russell.',
    options: [
      { text: 'Santa Claus (The Christmas Chronicles)', value: 'Santa' },
      { text: 'Ego (Guardians of the Galaxy)', value: 'Ego' },
      { text: 'Mr. Nobody (Fast and the Furious)', value: 'Mr. Nobody' },
      { text: 'John Ruth (the Hateful Eight)', value: 'John' },
      { text: 'Sheriff Hunt (Bone Tomahawk)', value: 'Sheriff Hunt' },
      { text: 'Stuntman Mike (Death Proof)', value: 'Stuntman Mike' },
      { text: 'The Commander (Sky High)', value: 'Commander' },
      { text: 'McCabe (Vanilla Sky)', value: 'McCabe' },
      { text: "Jack O'Neil (Stargate)", value: 'Jack' },
      { text: 'Elvis Presley (Forrest Gump)', value: 'Elvis' },
      { text: 'Wyatt Earp (Tombstone)', value: 'Wyatt' },
      { text: 'Captain Ron (Captain Ron)', value: 'Captain Ron' },
      { text: 'Gabriel Cash (Tango and Cash)', value: 'Cash' },
      { text: 'Jack Burton (Big Trouble in Little China)', value: 'Jack' },
      { text: 'MacReady (The Thing)', value: 'MacReady' },
      { text: 'Snake Plissken (Escape from New York)', value: 'Snake' },
      { text: 'Copper (The Fox and the Hound)', value: 'Copper' },
    ],
  },
  occupation: {
    type: 'text',
    label: 'What do you do at your occupation?',
    help: 'Condense the verb in your answer into a single "-er" noun. (e.g. if you are a sheep farmer, your answer will be “Farmer.”)',
  },
  petBreed: {
    type: 'text',
    label: "What was your first pet's specific species/breed?",
    help: 'If you never had a pet, please answer with an animal you wish you owned.',
  },
  matterState: {
    type: 'select',
    label: 'What is your favorite state of matter?',
    options: ['Solid', 'Liquid', 'Gaseous', 'Plasma'],
  },
  naked: {
    type: 'literal',
    display: 'Your first name is “Naked.”',
    literalValue: 'Naked',
  },
  zodiacSign: {
    type: 'select',
    label: 'What is your Zodiac sign?',
    options: [
      'Aries',
      'Taurus',
      'Gemini',
      'Cancer',
      'Leo',
      'Virgo',
      'Libra',
      'Scorpio',
      'Sagittarius',
      'Capricorn',
      'Aquarius',
      'Pisces',
      'Rat',
      'Ox',
      'Tiger',
      'Rabbit',
      'Dragon',
      'Snake',
      'Horse',
      'Goat',
      'Monkey',
      'Rooster',
      'Dog',
      'Pig',
    ],
  },
  lickable: {
    type: 'checkbox',
    label: "If you feel like it, your middle name can be “Lickable.” I won’t stop you.",
    checkedValue: '“Lickable”',
  },
  intangibleFear: {
    type: 'text',
    label: 'What is your greatest intangible fear?',
    help: 'e.g. Death, Loneliness, Fear Itself.',
  },
  tangibleFear: {
    type: 'text',
    label: 'What is your greatest tangible fear?',
    help: 'Singular. e.g., “Horse”.',
  },
  embarrassingMemory: {
    type: 'text',
    label: "What's your most embarrassing childhood memory?",
    help: 'Condense this story into two words.',
  },
  militaryHardware: {
    type: 'text',
    label: 'What is a piece of military hardware you think looks cool even though war is bad?',
    help: 'Singular. e.g., “Railgun”.',
  },
  madsMikkelsen: {
    type: 'text',
    label: "What is something you'd enjoy watching Mads Mikkelsen do?",
    help: 'Condense into one word.',
  },
  faveKubrick: {
    type: 'select',
    label: 'What is your favorite Kubrick film?',
    options: [
      { text: 'Eyes Wide Shut', value: 'Shut' },
      { text: 'Full Metal Jacket', value: 'Jacket' },
      { text: 'The Shining', value: 'Shining' },
      { text: 'Barry Lyndon', value: 'Lyndon' },
      { text: 'A Clockwork Orange', value: 'Orange' },
      { text: '2001: A Space Odyssey', value: 'Odyssey' },
      { text: 'Dr. Strangelove', value: 'Strangelove' },
      { text: 'Lolita', value: 'Lolita' },
      { text: 'Spartacus', value: 'Spartacus' },
      { text: 'Paths of Glory', value: 'Glory' },
      { text: 'The Killing', value: 'Killing' },
      { text: "Killer's Kiss", value: 'Kiss' },
      { text: 'Fear and Desire', value: 'Desire' },
    ],
  },
  faveJoyDivision: {
    type: 'select',
    label: 'What is your favorite Joy Division album?',
    options: [
      { text: 'An Ideal for Living', value: 'Ideal' },
      { text: 'Unknown Pleasures', value: 'Unknown' },
      { text: 'Closer', value: 'Closer' },
      { text: 'Still', value: 'Still' },
      { text: 'Substance', value: 'Substance' },
      { text: 'Heart and Soul', value: 'Heart' },
      { text: 'The Peel Sessions', value: 'Peel' },
    ],
  },
  nprScience: {
    type: 'text',
    label: 'What is a scientific term you picked up from listening to NPR once?',
    help: "It doesn’t matter if you know what it means, if it’s a cool-sounding word.",
  },
  stabbed: {
    type: 'text',
    label: "What is the object you'd least like to be stabbed by?",
  },
  recentActivity: {
    type: 'text',
    label: 'What is the last thing you did before starting this worksheet?',
  },
  bodyCondition: {
    type: 'text',
    label: 'What condition is your body currently in?',
    help: 'Single word answer, e.g. “Bloated”.',
  },
};

// === Categories ===
// Each category has:
//   header: static HTML string for the sidebar
//   fixed: [[questionId, target], ...] always shown
//   variants: [[[questionId, target], ...], ...] one sub-array chosen by sub-roll
//   emits: 'isThe' | 'isMan' — condition set by belonging to this category

const CATEGORIES = {
  normal: {
    header: `
      <h4>You have a Normal Name</h4>
      <blockquote>
        <p>Kojima’s early work includes lots of characters that have names that
        are widely considered to be “normal.” Was this just because, in the
        early years, he didn’t have the power to say, “I’m Hideo Kojima, I can
        name someone Die-Hardman if I want to” without people questioning him?
        Probably.</p>
      </blockquote>
      <h5>Examples:</h5>
      <ul>
        <li>Ed Brown (Policenauts)</li>
        <li>Michael Saito (Policenauts)</li>
        <li>Ivan Rodriguez (Snatcher)</li>
      </ul>
    `,
    fixed: [['fullName', 'fullName']],
    variants: [],
  },
  occupational: {
    header: `
      <h4>You have an Occupational Name</h4>
      <blockquote>
        <p>Kojima’s characters tend to be driven by the work that they do.
        That often carries over to their names. You, too, can be nothing more
        than your job.</p>
      </blockquote>
      <h5>Examples:</h5>
      <ul>
        <li>Fire Trooper (Metal Gear)</li>
        <li>Para-Medic (MGS3)</li>
        <li>Sam Porter Bridges (Death Stranding)</li>
      </ul>
    `,
    fixed: [['occupation', 'last']],
    variants: [
      [['personality', 'first']],
      [['skill', 'first']],
      [['nameHomonym', 'first']],
      [['faveKurtRussell', 'first']],
    ],
  },
  horny: {
    header: `
      <h4>You have a Horny Name</h4>
      <blockquote>
        <p>Kojima’s characters and stories are irrevocably horny. Weirdly
        horny, sure, but horny nonetheless.</p>
      </blockquote>
      <h5>Examples:</h5>
      <ul>
        <li>Naked Snake (MGS3)</li>
        <li>Liquid Snake (MGS)</li>
        <li>Solid Snake (Metal Gear)</li>
      </ul>
    `,
    fixed: [['petBreed', 'last']],
    variants: [
      [['matterState', 'first']],
      [['naked', 'first']],
      [['skill', 'first']],
      [['zodiacSign', 'first']],
    ],
    fixedAfter: [['lickable', 'middle']],
  },
  the: {
    header: `
      <h4>You have a “The” Name</h4>
      <blockquote>
        <p>Kojima loves to make people have names that start with the word
        “The” and they usually symbolize fears or unstoppable forces. You are
        now that unstoppable force.</p>
      </blockquote>
      <h5>Examples:</h5>
      <ul>
        <li>The Pain (MGS3)</li>
        <li>The Sorrow (MGS3)</li>
        <li>The Viscount (MGSV)</li>
      </ul>
    `,
    emits: 'isThe',
    variants: [
      [['intangibleFear', 'first']],
      [['tangibleFear', 'first']],
      [['embarrassingMemory', 'first']],
      [['militaryHardware', 'first']],
    ],
  },
  cool: {
    header: `
      <h4>You have a Cool Name</h4>
      <blockquote>
        <p>Kojima loves to be cool. Sometimes, his idea of cool is a bit
        strange, but it is always cool to Hideo Kojima, and that’s what
        matters.</p>
      </blockquote>
      <h5>Examples:</h5>
      <ul>
        <li>Vulcan Raven (MGS)</li>
        <li>Dr. Strangelove (MGS PW)</li>
        <li>Skull Face (MGSV)</li>
      </ul>
    `,
    fixed: [['madsMikkelsen', 'first']],
    variants: [
      [['faveKubrick', 'last']],
      [['faveJoyDivision', 'last']],
      [['nprScience', 'last']],
      [['skill', 'last']],
      [['intangibleFear', 'last']],
      [['nameHomonym', 'last']],
    ],
  },
  violent: {
    header: `
      <h4>You have a Violent Name</h4>
      <blockquote>
        <p>Sometimes, a Kojima name can be very threatening and violent. Now
        you can also be threatening and violent.</p>
      </blockquote>
      <h5>Examples:</h5>
      <ul>
        <li>Machinegun Kid (Metal Gear)</li>
        <li>Sniper Wolf (MGS)</li>
        <li>The Fury (MGS3)</li>
      </ul>
    `,
    fixed: [['stabbed', 'last']],
    variants: [
      [['nprScience', 'first']],
      [['matterState', 'first']],
      [['militaryHardware', 'first']],
      [['tangibleFear', 'first']],
    ],
  },
  lacksSubtext: {
    header: `
      <h4>You have a Name that Lacks Subtext</h4>
      <blockquote>
        <p>Sometimes, Kojima gives up and just names a character exactly what
        they are. Congratulations. You are exactly what you do.</p>
      </blockquote>
      <h5>Examples:</h5>
      <ul>
        <li>Fatman (MGS2)</li>
        <li>The Boss (MGS3)</li>
        <li>Deadman (Death Stranding)</li>
      </ul>
    `,
    emits: 'isMan',
    fixed: [['recentActivity', 'first']],
    variants: [],
  },
};

// Maps d20 roll (index 1–20) to category name
const CATEGORY_BY_ROLL = [
  null,            // index 0 unused
  'normal',        // 1
  'occupational',  // 2
  'occupational',  // 3
  'occupational',  // 4
  'occupational',  // 5
  'occupational',  // 6
  'horny',         // 7
  'horny',         // 8
  'horny',         // 9
  'horny',         // 10
  'the',           // 11
  'the',           // 12
  'the',           // 13
  'cool',          // 14
  'cool',          // 15
  'cool',          // 16
  'cool',          // 17
  'violent',       // 18
  'violent',       // 19
  'lacksSubtext',  // 20
];

// === State ===

const state = {
  conditions: {
    isMan: false,
    isBig: false,
    isOld: false,
    isCurrentCondition: false,
    isClone: false,
    isKojima: false,
    isThe: false,
  },
  firstName: '',
  middleName: '',
  lastName: '',
  currentCondition: '',
};

// === DOM Construction ===

function renderQuestion(questionId, target, container) {
  const q = QUESTIONS[questionId];

  if (q.type === 'literal') {
    const p = el('p', {}, q.display);
    state.firstName = q.literalValue;
    container.appendChild(p);
    return;
  }

  if (q.type === 'fullName') {
    const fieldset = el('fieldset', {});
    fieldset.appendChild(el('legend', {}, q.legend));

    const firstGroup = el('div', { class: 'form-group' });
    firstGroup.appendChild(el('label', { for: 'first-name' }, 'First Name'));
    const firstInput = el('input', { type: 'text', id: 'first-name', name: 'first-name', class: 'form-control', required: '' });
    firstInput.addEventListener('change', (e) => { state.firstName = e.target.value; });
    firstGroup.appendChild(firstInput);
    fieldset.appendChild(firstGroup);

    const lastGroup = el('div', { class: 'form-group' });
    lastGroup.appendChild(el('label', { for: 'last-name' }, 'Last Name'));
    const lastInput = el('input', { type: 'text', id: 'last-name', name: 'last-name', class: 'form-control', required: '' });
    lastInput.addEventListener('change', (e) => { state.lastName = e.target.value; });
    lastGroup.appendChild(lastInput);
    fieldset.appendChild(lastGroup);

    container.appendChild(fieldset);
    return;
  }

  if (q.type === 'checkbox') {
    const group = el('div', { class: 'form-group form-check' });
    const id = 'q-' + questionId;
    const input = el('input', { type: 'checkbox', id, name: id, class: 'form-check-input' });
    input.addEventListener('change', (e) => {
      state.middleName = e.target.checked ? q.checkedValue : '';
    });
    const label = el('label', { for: id, class: 'form-check-label' }, q.label);
    group.appendChild(input);
    group.appendChild(label);
    container.appendChild(group);
    return;
  }

  const slotMap = { first: 'firstName', last: 'lastName', currentCondition: 'currentCondition' };
  const slot = slotMap[target];

  const id = 'q-' + questionId;
  const group = el('div', { class: 'form-group' });
  group.appendChild(el('label', { for: id }, q.label));

  let input;
  if (q.type === 'select') {
    input = el('select', { id, name: id, class: 'form-control', required: '' });
    input.appendChild(el('option', { value: '', disabled: '', selected: '' }, 'Please select one'));
    const opts = Array.isArray(q.options) && typeof q.options[0] === 'string'
      ? q.options.map((o) => ({ text: o, value: o }))
      : q.options;
    opts.forEach((o) => {
      input.appendChild(el('option', { value: o.value }, o.text));
    });
  } else {
    input = el('input', { type: 'text', id, name: id, class: 'form-control', required: '' });
  }

  input.addEventListener('change', (e) => {
    state[slot] = e.target.value;
  });

  group.appendChild(input);

  if (q.help) {
    group.appendChild(el('small', { class: 'form-help-text' }, q.help));
  }

  container.appendChild(group);
}

function buildConditionsSection(form) {
  if (state.conditions.isKojima) {
    const section = el('section', { class: 'name-form' });
    const content = el('div', { class: 'name-form__content' });
    const div = el('div', {});
    div.innerHTML = '<h4>You have the Kojima Condition</h4><p>Oh no. You are Hideo Kojima. Hideo Kojima created you and is also you. You are the man who created himself and there is nothing you can do about it. You’re in Kojima’s world—your world—and that’s just the breaks, pal. You’re Hideo Kojima now. Go do the things that Hideo Kojima does.</p>';
    content.appendChild(div);
    section.appendChild(content);
    form.appendChild(section);
    return;
  }

  // Suppress the Man panel when isMan came from the LacksSubtext category;
  // the category card already explains the -man suffix.
  const showManPanel = state.conditions.isMan && state.category !== 'lacksSubtext';
  const hasCondition = showManPanel || state.conditions.isBig ||
    state.conditions.isOld || state.conditions.isCurrentCondition || state.conditions.isClone;

  if (!hasCondition) return;

  const section = el('section', { class: 'name-form' });
  const header = el('header', { class: 'name-form__header' });
  header.appendChild(el('h3', {}, 'Your Name Conditions:'));
  const bq = el('blockquote', {});
  bq.appendChild(el('p', {}, 'Sometimes, a character will have a plot-based condition that affects their name. Conditions can stack.'));
  header.appendChild(bq);
  section.appendChild(header);

  const content = el('div', { class: 'name-form__content' });

  if (showManPanel) {
    const div = el('div', {});
    div.innerHTML = '<h4>You have the “Man” Condition</h4><p>Your last name will include the suffix <em>-man</em>.</p>';
    content.appendChild(div);
  }
  if (state.conditions.isBig) {
    const div = el('div', {});
    div.innerHTML = `<h4>You have the “Big” Condition</h4><p>You’re big. Your name must have “Big” at the beginning of it.</p>`;
    content.appendChild(div);
  }
  if (state.conditions.isOld) {
    const div = el('div', {});
    div.innerHTML = '<h4>You have the “Old” Condition</h4><p>You are older than you once were. Your name must have “Old” at the beginning of it.</p>';
    content.appendChild(div);
  }
  if (state.conditions.isCurrentCondition) {
    const catSection = el('section', { class: 'category' });
    const catHeader = el('header', { class: 'category__header' });
    catHeader.innerHTML = '<h4>You have the “Your Current Condition” Condition</h4><p>You are how you currently are. Add the condition your body is currently in to the beginning of your name.</p>';
    catSection.appendChild(catHeader);
    const catContent = el('div', { class: 'category__content' });
    renderQuestion('bodyCondition', 'currentCondition', catContent);
    catSection.appendChild(catContent);
    content.appendChild(catSection);
  }
  if (state.conditions.isClone) {
    const div = el('div', {});
    div.innerHTML = '<h4>You have the Clone Condition</h4><p>You are a clone of someone else, or you have been brainwashed into becoming a mental doppelganger of someone else.</p><p><small>(Currently hard-wired to replace your last name with “Snake”.)</small></p>';
    content.appendChild(div);
  }

  section.appendChild(content);
  form.appendChild(section);
}

function buildForm() {
  const form = document.getElementById('name-form');

  // Category section — skipped entirely when isKojima
  if (!state.conditions.isKojima) {
    const cat = CATEGORIES[state.category];

    const catSection = el('section', { class: 'name-form' });
    const catHeader = el('header', { class: 'name-form__header' });
    catHeader.appendChild(el('h3', {}, 'Your Name Category:'));
    const catBq = el('blockquote', {});
    catBq.appendChild(el('p', {}, 'Kojima names fall into a finite number of categories. This section will determine the category in which your name belongs.'));
    catBq.appendChild(el('p', { class: 'form-help-text' }, '(Reload the page for a different category.)'));
    catHeader.appendChild(catBq);
    catSection.appendChild(catHeader);
    form.appendChild(catSection);

    const catDiv = el('section', { class: 'category' });
    const catInnerHeader = el('header', { class: 'category__header' });
    catInnerHeader.innerHTML = cat.header;
    catDiv.appendChild(catInnerHeader);
    const catContent = el('div', { class: 'category__content' });
    catDiv.appendChild(catContent);
    catSection.appendChild(catDiv);

    // Fixed questions
    if (cat.fixed) {
      cat.fixed.forEach(([qId, target]) => renderQuestion(qId, target, catContent));
    }

    // Pick one variant by sub-roll
    if (cat.variants && cat.variants.length > 0) {
      const variantIdx = random(1, cat.variants.length);
      cat.variants[variantIdx - 1].forEach(([qId, target]) => renderQuestion(qId, target, catContent));
    }

    // Fixed questions after variant (e.g. optional middle-name checkbox in Horny)
    if (cat.fixedAfter) {
      cat.fixedAfter.forEach(([qId, target]) => renderQuestion(qId, target, catContent));
    }
  }

  // Conditions section
  buildConditionsSection(form);

  // Submit button
  const actionsDiv = el('div', { class: 'form-actions' });
  actionsDiv.appendChild(el('button', { type: 'submit', class: 'btn btn-primary' }, 'Generate Your Kojima Name'));
  form.appendChild(actionsDiv);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showResult();
  });

  form.hidden = false;
}

// === Name Assembly ===

function computeDisplayName() {
  if (state.conditions.isKojima) return 'Hideo Kojima';

  const firstAndMiddle = [state.firstName, state.middleName].filter(Boolean).join(' ');
  const lastName = state.conditions.isClone ? 'Snake' : state.lastName;

  let fullName;
  if (!firstAndMiddle && !lastName) {
    fullName = '';
  } else if (!firstAndMiddle) {
    fullName = lastName;
  } else if (!lastName) {
    fullName = firstAndMiddle;
  } else {
    fullName = `${firstAndMiddle} ${lastName}`;
  }

  if (!fullName) return '';

  let prefix = '';
  if (state.conditions.isThe) prefix += 'The ';
  if (state.conditions.isBig) prefix += 'Big ';
  if (state.conditions.isOld) prefix += 'Old ';
  if (state.conditions.isCurrentCondition && state.currentCondition) {
    prefix += `${state.currentCondition} `;
  }

  let suffix = '';
  if (state.conditions.isMan) suffix += 'man';

  return titleCase(`${prefix}${fullName}${suffix}`);
}

function showResult() {
  document.getElementById('name-form').hidden = true;
  document.getElementById('result').hidden = false;

  const displayName = computeDisplayName();
  document.getElementById('result-name').textContent = displayName;

  const appUrl = encodeURIComponent('https://kojima.oscorp.net/');
  const message = encodeURIComponent(`Hello, my #KojimaName is "${displayName}"`);
  document.getElementById('share-twitter').href =
    `https://twitter.com/intent/tweet?text=${message}&url=${appUrl}`;
  document.getElementById('share-facebook').href =
    `https://www.facebook.com/sharer/sharer.php?quote=${message}&u=${appUrl}&display=popup`;
}

// === Init ===

document.addEventListener('DOMContentLoaded', () => {
  const categoryRoll = random(1, 20);
  const manRoll = random(1, 4);
  const conditionRoll = random(1, 8);
  const cloneRoll = random(1, 12);
  const kojimaRoll = random(1, 100);

  if (manRoll === 4) state.conditions.isMan = true;
  if (conditionRoll === 6) state.conditions.isBig = true;
  if (conditionRoll === 7) state.conditions.isOld = true;
  if (conditionRoll === 8) state.conditions.isCurrentCondition = true;
  if (cloneRoll === 12) state.conditions.isClone = true;
  if (kojimaRoll === 69) state.conditions.isKojima = true;

  document.getElementById('reset-btn').addEventListener('click', () => {
    location.reload();
  });

  if (!state.conditions.isKojima) {
    state.category = CATEGORY_BY_ROLL[categoryRoll];
    const cat = CATEGORIES[state.category];

    if (cat.emits === 'isThe') state.conditions.isThe = true;
    if (cat.emits === 'isMan') state.conditions.isMan = true;
  }

  buildForm();
});
