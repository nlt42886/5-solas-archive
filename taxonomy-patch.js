(function () {
  const PATCH_VERSION = '2026-04-13-granular-taxonomy-v2';
  const PATCH_KEY = '5sa_taxonomy_patch_' + PATCH_VERSION;

  function uniquePush(arr, value) {
    if (!arr.includes(value)) arr.push(value);
  }

  function findLocus(tree, locusId) {
    return tree.find(l => l.id === locusId);
  }

  function ensureTopic(tree, locusId, topicId, topicName) {
    const locus = findLocus(tree, locusId);
    if (!locus) return null;
    let topic = locus.topics.find(t => t.id === topicId);
    if (!topic) {
      topic = { id: topicId, name: topicName, subtopics: [] };
      locus.topics.push(topic);
    } else if (topicName && topic.name !== topicName) {
      topic.name = topicName;
    }
    return topic;
  }

  function ensureSubtopics(tree, locusId, topicId, topicName, subtopics) {
    const topic = ensureTopic(tree, locusId, topicId, topicName);
    if (!topic) return;
    subtopics.forEach(st => uniquePush(topic.subtopics, st));
  }

  function mergeGranularTaxonomyInto(tree) {
    ensureSubtopics(tree, 'l1', 't1b', 'Holy Scripture', [
      'Material Sufficiency',
      'Formal Sufficiency',
      'Self-Authentication of Scripture',
      'Internal Testimony of the Spirit',
      'Scripture and Tradition',
      'Scripture and Church Authority',
      'Original Languages',
      'Translation',
      'Canon and Apocrypha'
    ]);
    ensureSubtopics(tree, 'l1', 't1d', 'Hermeneutics', [
      'Analogy of Scripture',
      'Literal and Figurative Sense',
      'Christological Interpretation',
      'Analogy of Faith and Dogmatic Exegesis'
    ]);

    ensureSubtopics(tree, 'l3', 't3a', 'Doctrine of the Trinity', [
      'Unity of Essence',
      'One Essence Three Persons',
      'Nicene Consubstantiality',
      'Personal Properties',
      'Relations of Origin',
      'Ad Intra / Ad Extra',
      'Opera ad Extra',
      'Appropriation',
      'Inseparable Operations',
      'Perichoresis',
      'Processions and Missions',
      'Taxis',
      'Economic vs Immanent Trinity',
      'Divine Simplicity and Trinity'
    ]);
    ensureSubtopics(tree, 'l3', 't3b', 'The Father', [
      'Paternity & Unbegottenness',
      'Monarchy of the Father',
      'Father as Principium'
    ]);
    ensureSubtopics(tree, 'l3', 't3c', 'The Son', [
      'Eternal Sonship',
      'Begotten, Not Made',
      'Autotheos',
      'Son as Image and Wisdom',
      'Mission of the Son'
    ]);
    ensureSubtopics(tree, 'l3', 't3d', 'The Holy Spirit', [
      'Spirit as Third Person',
      'Mission of the Spirit',
      'Spirit of the Father and the Son'
    ]);
    ensureSubtopics(tree, 'l3', 't3e', 'Trinitarian Heresies', [
      'Pneumatomachianism',
      'Socinianism'
    ]);
    ensureSubtopics(tree, 'l3', 't3f', 'Modern Trinitarian Debates', [
      'Eternal Functional Subordination Critique',
      'Social Trinitarianism Critique',
      'Relations of Origin',
      'Classical Trinitarianism'
    ]);

    ensureSubtopics(tree, 'l9', 't9a', 'Person of Christ', [
      'Anhypostasia / Enhypostasia',
      'Extra Calvinisticum',
      'Person and Nature Distinction',
      "Christ's Human Knowledge",
      'Beatific Vision Question',
      'Impeccability',
      'Theandric Actions'
    ]);
    ensureSubtopics(tree, 'l9', 't9b', 'Two Natures', [
      'Rational Human Soul',
      'Consubstantial with the Father',
      'Consubstantial with Us',
      'Dyothelitism',
      'Dyenergism',
      'Reformed vs Lutheran Christology',
      'Genus Majestaticum Critique'
    ]);
    ensureSubtopics(tree, 'l9', 't9c', 'Christological Heresies', [
      'Monothelitism',
      'Modern Kenoticism',
      'Adoptionism',
      'Docetism'
    ]);
    ensureSubtopics(tree, 'l9', 't9d', 'Threefold Office', [
      'Mediator and Surety',
      'Suretyship'
    ]);
    ensureSubtopics(tree, 'l9', 't9e', 'States of Christ', [
      'State of Humiliation',
      'State of Exaltation',
      'Descent into Hell'
    ]);

    ensureSubtopics(tree, 'l8', 't8a', 'Covenant of Redemption', [
      'Parties of the Covenant of Redemption',
      'Conditions and Promises',
      'Suretyship of Christ',
      'Eternal Foundation of the Covenant of Grace'
    ]);
    ensureSubtopics(tree, 'l8', 't8b', 'Covenant of Works', [
      'Natural and Covenantal Relation',
      'Condition and Promise of Life',
      'Sacramental Tree'
    ]);
    ensureSubtopics(tree, 'l8', 't8c', 'Covenant of Grace', [
      'Substance and Administration',
      'Promise and Fulfillment',
      'External and Internal Administration',
      'Visible and Invisible Administration',
      'Testament and Covenant'
    ]);
    ensureSubtopics(tree, 'l8', 't8d', 'Abrahamic Covenant', [
      'Abrahamic Promises',
      'Gospel to Abraham',
      'Infant Inclusion Debate',
      'Typological and Spiritual Fulfillment'
    ]);
    ensureSubtopics(tree, 'l8', 't8e', 'Mosaic Covenant', [
      'Mosaic Covenant Debates',
      'Republication',
      'Subservient Covenant View',
      'Mixed Covenant Question',
      'Typological Kingdom',
      'Works Principle at Sinai',
      'Levitical Typology'
    ]);
    ensureSubtopics(tree, 'l8', 't8f', 'Davidic Covenant', [
      'Royal Sonship',
      'Temple and Kingdom'
    ]);
    ensureSubtopics(tree, 'l8', 't8g', 'New Covenant', [
      'New Covenant Membership',
      'New Covenant Efficacy',
      'Better Covenant',
      'Visible Church and New Covenant',
      'Baptist vs Westminster Covenant Theology'
    ]);
    ensureSubtopics(tree, 'l8', 't8h', 'Comparative Covenant Theology', [
      'Baptist vs Westminster Covenant Theology',
      '1689 Federalism',
      'Westminster Federalism',
      'One Covenant, Multiple Administrations',
      'Substance and Administration Debate'
    ]);

    ensureSubtopics(tree, 'l10', 't10a', 'Atonement', [
      'Active Obedience',
      'Passive Obedience',
      "Christ's Whole Obedience",
      'Necessity of Atonement',
      'Penal Substitution',
      'Satisfaction',
      'Propitiation',
      'Expiation',
      'Reconciliation',
      'Redemption',
      'Curse-Bearing',
      'Sufficiency of Atonement',
      'Efficiency of Atonement',
      'Extent and Efficacy',
      'Particular Redemption',
      'Definite Atonement',
      'Impetration and Application',
      'High Priestly Intercession and Atonement',
      'Christ Suffered in Soul',
      'Desertion of Christ',
      'Christ Legally Guilty?',
      'Christ Morally Pure in Bearing Sin',
      'Paid to God, Not the Devil',
      'Incarnation apart from Redemption?',
      'Common Grace and the Death of Christ',
      'Reformed vs Aquinas on Atonement',
      'Governmental Theory Critique',
      'Moral Influence Theory Critique',
      'Christus Victor and Penal Substitution',
      'Objections and Replies'
    ]);

    ensureSubtopics(tree, 'l10', 't10f', 'Justification', [
      'Remission of Sins',
      'Double Imputation',
      "Imputation of Christ's Righteousness",
      'Active Obedience and Justification',
      'Passive Obedience and Justification',
      'Faith as Instrument',
      'Faith and Works',
      'Union with Christ and Justification',
      'Justification and Final Judgment',
      'Justification from Eternity?',
      'Assurance and Justification',
      'Roman Catholic Controversy',
      'New Perspective on Paul Critique',
      'Federal Vision Critique'
    ]);

    ensureSubtopics(tree, 'l10', 't10k', 'Union with Christ', [
      'Legal and Vital Union',
      'Union and Communion',
      'Union with Christ as Architectonic Principle',
      'Union with Christ as Ground',
      'Union and the Ordo Salutis'
    ]);

    return tree;
  }

  function reconcileTreeSnapshot() {
    if (!Array.isArray(TREE)) return;
    mergeGranularTaxonomyInto(DEFAULT_TREE);
    mergeGranularTaxonomyInto(TREE);
    saveTreeSnapshot();
  }

  function addWebsiteSeed(locusId, topicId, subtopicName, entry) {
    const key = subtopicKey(locusId, topicId, subtopicName);
    const exists = getEntries(key, 'websites').some(e =>
      (e.url || '').trim() === (entry.url || '').trim() ||
      (e.title || '').trim() === (entry.title || '').trim()
    );
    if (!exists) addEntry(key, 'websites', Object.assign({ seeAlso: [], pinned: false }, entry));
  }

  function removeWebsiteSeed(locusId, topicId, subtopicName, predicate) {
    const key = subtopicKey(locusId, topicId, subtopicName);
    const current = getEntries(key, 'websites');
    const next = current.filter(e => !predicate(e));
    if (next.length !== current.length) setEntries(key, 'websites', next);
  }

  function seedGranularWebsiteLinks() {
    const seedKey = '5sa_granular_websites_v2';
    if (localStorage.getItem(seedKey) === '1') return;

    removeWebsiteSeed('l3','t3a','One Essence Three Persons', e => /monergism/i.test(e.url || ''));
    removeWebsiteSeed('l10','t10a','Definite / Limited Atonement', e => /monergism/i.test(e.url || ''));
    removeWebsiteSeed('l10','t10f','Forensic Justification', e => /monergism/i.test(e.url || ''));
    removeWebsiteSeed('l8','t8c','One Covenant of Grace', e => /monergism/i.test(e.url || ''));

    addWebsiteSeed('l3','t3c','Eternal Generation', {
      title: 'Monergism: Eternal Generation',
      url: 'https://www.monergism.com/topics/jesus-christ/titles-christ/son-god/eternal-generation',
      description: 'A focused collection of essays and primary-source excerpts on the eternal generation of the Son, including links to Bavinck, Swain, and related Nicene/Reformed material.',
      tags: ['Trinity','Eternal Generation','Nicene Creed','Reformed']
    });

    addWebsiteSeed('l6','t6a','Government', {
      title: "Calvin, Institutes 1.16 — Providence",
      url: 'https://ccel.org/ccel/calvin/institutes.iii.xvii.html',
      description: 'Calvin on God\'s providence over the world and every creature, with direct attention to preservation, government, fortune, chance, and divine superintendence.',
      tags: ['Providence','Calvin','Theology Proper','Government']
    });

    addWebsiteSeed('l6','t6a','Government', {
      title: "Calvin, Institutes 1.17 — Right Use of the Doctrine of Providence",
      url: 'https://ccel.org/ccel/calvin/institutes.iii.xviii.html',
      description: 'Calvin on the pastoral and practical use of providence: consolation, patience, activity in vocation, and the rejection of fatalism.',
      tags: ['Providence','Calvin','Vocation','Pastoral Theology']
    });

    addWebsiteSeed('l10','t10a','Penal Substitution', {
      title: "Calvin, Institutes 2.16 — How Christ Performed the Office of Redeemer",
      url: 'https://www.ccel.org/ccel/calvin/institutes.ii.xii.html',
      description: 'Calvin on Christ\'s satisfaction, obedience, death, resurrection, ascension, and merit in the accomplishment of redemption.',
      tags: ['Atonement','Penal Substitution','Satisfaction','Calvin']
    });

    addWebsiteSeed('l10','t10f','Forensic Justification', {
      title: "Calvin, Institutes 3.11 — Justification Defined",
      url: 'https://ccel.org/ccel/calvin/institutes.v.xiv.html',
      description: 'Calvin\'s classic chapter on the forensic nature of justification, righteousness imputed in Christ, and the exclusion of works from the ground of acceptance with God.',
      tags: ['Justification','Forensic Justification','Imputation','Calvin','Sola Fide']
    });

    addWebsiteSeed('l8','t8g','Baptism & New Covenant', {
      title: 'Founders: The Confession of 1689 and Covenant Theology',
      url: 'https://founders.org/articles/the-confession-of-1689-and-covenant-theology/',
      description: 'A more specific 1689-focused article on covenant theology, useful for Baptist vs Westminster comparisons and new-covenant membership questions.',
      tags: ['Covenant Theology','London Baptist Confession 1689','New Covenant','Baptist vs Westminster Covenant Theology']
    });

    addWebsiteSeed('l1','t1b','Self-Authentication of Scripture', {
      title: 'OPC: Westminster Confession of Faith, Chapter 1',
      url: 'https://www.opc.org/wcf.html#Chapter_1',
      description: 'Direct anchor link to Westminster Confession chapter 1, useful for authority, sufficiency, inspiration, perspicuity, and the self-authenticating character of Scripture.',
      tags: ['Scripture','Westminster Confession','Self-Authentication of Scripture','Sola Scriptura']
    });

    addWebsiteSeed('l8','t8c','Substance and Administration', {
      title: 'OPC: Westminster Confession of Faith, Chapter 7',
      url: 'https://www.opc.org/wcf.html#Chapter_7',
      description: 'Direct access to Westminster Confession chapter 7 on God’s covenant with man, helpful for covenant-of-works and covenant-of-grace structure and administration questions.',
      tags: ['Covenant Theology','Westminster Confession','Substance and Administration','Covenant of Grace']
    });

    addWebsiteSeed('l10','t10f','Faith as Instrument', {
      title: 'OPC: Westminster Confession of Faith, Chapter 11',
      url: 'https://www.opc.org/wcf.html#Chapter_11',
      description: 'Direct access to Westminster Confession chapter 11 on justification, useful for faith as instrument, imputation, and the forensic character of justification.',
      tags: ['Justification','Westminster Confession','Faith as Instrument','Imputation']
    });

    addWebsiteSeed('l10','t10a','Active Obedience', {
      title: 'OPC: Westminster Confession of Faith, Chapters 8 and 11',
      url: 'https://www.opc.org/wcf.html#Chapter_8',
      description: 'Direct access to Westminster Confession chapter 8 on Christ the Mediator, especially useful for obedience, satisfaction, and redemption-accomplished discussions tied to active obedience.',
      tags: ['Atonement','Westminster Confession','Active Obedience','Christ the Mediator']
    });

    addWebsiteSeed('l17','t17c','London Baptist Confession 1689', {
      title: 'Founders: 1689 Confession Chapter Index',
      url: 'https://founders.org/1689-confession/',
      description: 'Chapter-level access to the 1689 confession, better suited to direct doctrinal linking than a generic homepage.',
      tags: ['London Baptist Confession 1689','Confessional Standards','Reformed Baptist']
    });

    localStorage.setItem(seedKey, '1');
  }

  function rerenderCurrentView() {
    renderTree();
    updateStats();
    if (currentTab === 'tags') {
      renderTagView();
      return;
    }
    if (currentTab === 'resource') {
      renderResourceView();
      return;
    }
    if (currentTab === 'scripture') {
      showScriptureIndex();
      return;
    }
    if (currentSubtopicKey && currentLocusViewId && currentTopicViewId) {
      renderSubtopicView();
      document.getElementById('subtopic-view').style.display = 'block';
      return;
    }
    if (currentTopicViewId) {
      openTopicPage(currentTopicViewId.locusId, currentTopicViewId.topicId);
      return;
    }
    if (currentLocusViewId) {
      openLocusPage(currentLocusViewId);
      return;
    }
    showLokiHome();
  }

  function applyPatch() {
    if (localStorage.getItem(PATCH_KEY) === '1') {
      reconcileTreeSnapshot();
      return;
    }
    reconcileTreeSnapshot();
    seedGranularWebsiteLinks();
    localStorage.setItem(PATCH_KEY, '1');
    rerenderCurrentView();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyPatch);
  } else {
    applyPatch();
  }
})();
