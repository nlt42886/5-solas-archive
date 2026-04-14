(function () {
  const PATCH_KEY = '5sa_source_patch_rbo_free_will_v1';
  const SOURCE_URL = 'https://reformedbooksonline.com/the-reformed-freedom-of-the-will-vs-philosophical-necessity/';
  const SOURCE_TITLE = 'RBO: The Reformed Freedom of Choice vs. Determinism';

  function addSeed(locusId, topicId, subtopicName, sectionId, entry, identityField) {
    const key = subtopicKey(locusId, topicId, subtopicName);
    const current = getEntries(key, sectionId);
    const exists = current.some(e => {
      if (identityField === 'url') return (e.url || '').trim() === (entry.url || '').trim();
      return (e.title || '').trim() === (entry.title || '').trim();
    });
    if (!exists) addEntry(key, sectionId, Object.assign({ seeAlso: [], pinned: false }, entry));
  }

  function addWebsiteSeed(locusId, topicId, subtopicName, entry) {
    addSeed(locusId, topicId, subtopicName, 'websites', entry, 'url');
  }

  function addNoteSeed(locusId, topicId, subtopicName, entry) {
    addSeed(locusId, topicId, subtopicName, 'notes', entry, 'title');
  }

  function addArgumentSeed(locusId, topicId, subtopicName, entry) {
    addSeed(locusId, topicId, subtopicName, 'arguments', entry, 'title');
  }

  function seedFreedomWillMaterial() {
    if (localStorage.getItem(PATCH_KEY) === '1') return;

    addWebsiteSeed('l4', 't4a', 'Nature of the Decree', {
      title: SOURCE_TITLE,
      url: SOURCE_URL,
      description: 'Topical index and historical overview arguing that older Reformed theology distinguished God’s decree from philosophical determinism and preserved liberty and contingency at the level of second causes.',
      tags: ['Divine Decree', 'Providence', 'Determinism', 'Richard Muller', 'Jonathan Edwards']
    });

    addWebsiteSeed('l6', 't6b', 'Primary & Secondary Causation', {
      title: SOURCE_TITLE,
      url: SOURCE_URL,
      description: 'Useful for Westminster 5.2, second causes, contingency, free causes, and the claim that providence governs distinct kinds of created causality without flattening them into necessity.',
      tags: ['Providence', 'Second Causes', 'Contingency', 'Free Choice', 'Westminster Confession']
    });

    addWebsiteSeed('l6', 't6c', 'Compatibilism & Free Will', {
      title: SOURCE_TITLE,
      url: SOURCE_URL,
      description: 'Historical resource on freedom of choice, moral necessity, and the distinction between fallen spiritual inability and natural liberty in created, civil, and external acts.',
      tags: ['Compatibilism', 'Free Will', 'Total Depravity', 'Jonathan Edwards', 'Richard Muller']
    });

    addWebsiteSeed('l7', 't7c', 'Posse Non Peccare', {
      title: SOURCE_TITLE,
      url: SOURCE_URL,
      description: 'Relevant for Adam’s pre-fall liberty and the argument that original righteousness included genuine created freedom to obey or disobey.',
      tags: ['Adam', 'Posse Non Peccare', 'Original Righteousness', 'Free Choice']
    });

    addWebsiteSeed('l7', 't7e', 'Total Depravity', {
      title: SOURCE_TITLE,
      url: SOURCE_URL,
      description: 'Relevant for the claim that fallen man remains a voluntary agent in ordinary life while lacking power unto saving good apart from grace.',
      tags: ['Total Depravity', 'Augustine', 'Free Choice', 'Spiritual Inability']
    });

    addNoteSeed('l4', 't4a', 'Nature of the Decree', {
      title: 'RBO summary: decree is not the same thing as determinism',
      content: 'This source argues that older Reformed theology did not identify predestination with a mechanistic chain of antecedent causes. God’s decree renders events certain and infallible, yet the decree belongs to a higher, non-creaturely order and therefore does not itself collapse created agency into natural necessity. The page leans especially on Westminster Confession 3.1 and 5.2, together with J. K. S. Reid’s distinction between predestination, determination, and determinism.',
      tags: ['Divine Decree', 'Determinism', 'Westminster Confession', 'Predestination', 'Richard Muller']
    });

    addNoteSeed('l6', 't6b', 'Primary & Secondary Causation', {
      title: 'RBO summary: Westminster’s three kinds of second causes',
      content: 'The page organizes Westminster 5.2 around three kinds of secondary causes. Necessary causes produce effects by nature. Free causes are rational acts of will not forced by coercion or by absolute natural necessity. Contingent causes depend on conditions and can fall out otherwise in the created order. The argument is that providence governs all three without destroying their proper mode of operation.',
      tags: ['Providence', 'Second Causes', 'Necessary Causes', 'Free Causes', 'Contingency']
    });

    addArgumentSeed('l6', 't6b', 'Primary & Secondary Causation', {
      title: 'Westminster certainty does not abolish contingency',
      position: 'Historic Reformed / Westminster',
      claim: 'Events can be certain by divine decree while remaining contingent or free at the level of second causes.',
      supportingScripture: 'Acts 2:23; Prov. 16:33; Eccl. 9:11',
      objections: 'If the decree is infallible, then every event must already be naturally necessary and unable to be otherwise.',
      responses: 'The Westminster distinction is between certainty and necessity. Providence establishes necessary, free, and contingent causes according to their created mode rather than reducing all causality to one deterministic pattern.',
      tags: ['Providence', 'Second Causes', 'Contingency', 'Divine Decree', 'Westminster Confession']
    });

    addNoteSeed('l6', 't6c', 'Compatibilism & Free Will', {
      title: 'RBO summary: historic Reformed use of free choice language',
      content: 'The page collects older Reformed statements saying the will is naturally free from coercion and from absolute necessity of nature, even while moral corruption enslaves the sinner spiritually. On this account, the unregenerate person cannot choose saving good, yet still makes voluntary choices in ordinary civil and external matters. The source uses Owen, Cunningham, van Mastricht, Turretin, and Richard Muller to frame this as the older confessional pattern.',
      tags: ['Free Will', 'Compatibilism', 'John Owen', 'Francis Turretin', 'Petrus van Mastricht']
    });

    addArgumentSeed('l6', 't6c', 'Compatibilism & Free Will', {
      title: 'Fallen liberty in civil things is not spiritual ability',
      position: 'Historic Reformed anthropology',
      claim: 'The fallen will retains natural liberty in civil and external actions while lacking spiritual power to choose Christ apart from grace.',
      supportingScripture: 'Rom. 8:5-8; Eph. 2:1-3; 1 Cor. 2:14',
      objections: 'If man is free in any sense after the fall, then total depravity is denied.',
      responses: 'The distinction is between natural liberty and moral or spiritual inability. The page argues that inability unto saving good does not mean the will is forced in every created action.',
      tags: ['Total Depravity', 'Free Will', 'Moral Inability', 'Civil Freedom']
    });

    addNoteSeed('l6', 't6c', 'Compatibilism & Free Will', {
      title: 'RBO framing of the Jonathan Edwards shift',
      content: 'The page presents Jonathan Edwards’s Freedom of the Will (1754) as a major shift toward philosophical necessity or deterministic compatibilism. It contrasts that trajectory with earlier Reformed discussions of moral necessity, created freedom, and contingency. Because that historical judgment is interpretive, the page’s linked Muller and Helm exchanges are worth consulting alongside the summary.',
      tags: ['Jonathan Edwards', 'Richard Muller', 'Determinism', 'Compatibilism', 'History of Doctrine']
    });

    addNoteSeed('l7', 't7c', 'Posse Non Peccare', {
      title: 'RBO summary: Adam before the fall had contrary choice',
      content: 'The page argues that pre-fall Adam possessed the power of contrary choice in created obedience and sin, and that this should not be confused with later discussions of fallen inability. It uses this point to reject the idea that Reformed anthropology begins with a deterministic psychology.',
      tags: ['Adam', 'Posse Non Peccare', 'Original Righteousness', 'Free Choice']
    });

    addNoteSeed('l7', 't7e', 'Total Depravity', {
      title: 'RBO summary: free only to evil is not the same as one unavoidable sin',
      content: 'Drawing on Augustine and later Reformed authors, the page argues that the fallen person is in moral bondage to evil yet is not narrowed to one unavoidable sinful act. The sinner remains a voluntary agent who can choose among many sinful alternatives, but cannot choose saving good without grace.',
      tags: ['Total Depravity', 'Augustine', 'Free Will', 'Moral Bondage', 'Spiritual Inability']
    });

    localStorage.setItem(PATCH_KEY, '1');
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
    seedFreedomWillMaterial();
    rerenderCurrentView();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyPatch);
  } else {
    applyPatch();
  }
})();
