// Lógica de la página principal (el formulario de inscripción).

function applyConfig() {
  document.title = 'Inscripción · ' + CONFIG.eventName;
  document.getElementById('ev-name').textContent = CONFIG.eventName;
  document.getElementById('ev-date').textContent = CONFIG.eventDate;
  document.getElementById('ev-place').textContent = CONFIG.eventPlace;
  document.getElementById('ev-price').textContent = CONFIG.priceLabel;
  document.getElementById('ev-cupo').textContent = CONFIG.cupoNote;

  const tagEl = document.getElementById('ev-tag');
  if (CONFIG.eventTag) {
    tagEl.textContent = CONFIG.eventTag;
  } else {
    tagEl.classList.add('hidden');
  }

  if (CONFIG.description) {
    document.getElementById('desc-section').style.display = 'block';
    document.getElementById('ev-desc').textContent = CONFIG.description;
  }

  const extraWrap = document.getElementById('extra-fields');
  CONFIG.extraFields.forEach((f) => {
    const div = document.createElement('div');
    div.className = 'field';
    div.dataset.field = f.id;
    let inner = `<label>${f.label} ${f.required ? '<span class="req">*</span>' : ''}</label>`;
    if (f.type === 'select') {
      inner +=
        `<select name="${f.id}"><option value="">Elegir…</option>` +
        f.options.map((o) => `<option value="${o}">${o}</option>`).join('') +
        `</select>`;
    } else {
      inner += `<input type="text" name="${f.id}">`;
    }
    inner += `<div class="field-error">Completá este campo.</div>`;
    div.innerHTML = inner;
    extraWrap.appendChild(div);
  });
}

function validEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function setInvalid(fieldEl, invalid) {
  fieldEl.classList.toggle('invalid', invalid);
}

function leerDatosPersonales(form) {
  const campos = ['nombre', 'apellido', 'dni', 'email', 'telefono'];
  const values = {};
  let ok = true;

  campos.forEach((name) => {
    const input = form.querySelector(`[name="${name}"]`);
    const fieldEl = input.closest('.field');
    const val = input.value.trim();
    let bad = val.length === 0;
    if (name === 'email' && !bad) bad = !validEmail(val);
    if (name === 'dni' && !bad) bad = val.replace(/\D/g, '').length < 6;
    setInvalid(fieldEl, bad);
    if (bad) ok = false;
    values[name] = val;
  });

  return { values, ok };
}

document.getElementById('reg-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  const msg = document.getElementById('form-msg');
  msg.style.display = 'none';

  const { values, ok } = leerDatosPersonales(form);
  if (!ok) {
    msg.textContent = 'Revisá los campos marcados en rojo.';
    msg.style.display = 'block';
    return;
  }

  const submitBtn = document.getElementById('submit-btn');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Enviando…';

  enviarInscripcion(values)
    .then(() => {
      mostrarAgradecimiento();
    })
    .catch((error) => {
      msg.textContent = error.message;
      msg.style.display = 'block';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Confirmar datos';
    });
});

function mostrarAgradecimiento() {
  document.getElementById('form-card').style.display = 'none';
  document.getElementById('confirm-wrap').style.display = 'block';
  document.getElementById('confirm-wrap').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

applyConfig();
