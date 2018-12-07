

// for (var i = 0; i < 20; i++) {
//   console.log(buzzword());
// }

function randomarray(a) {
  var i;
  for (i = a.length; i--;) {
    var j = Math.floor((i + 1) * Math.random());
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  return a;
}

function oneOf(a){
  let i = Math.floor(a.length * Math.random());
  return a[i];
}

function generateTask() {

  // var adverbs = new Array(
  //   'appropriately', 'assertively', 'authoritatively', 'collaboratively', 'compellingly', 'competently', 'completely',
  //   'continually', 'conveniently', 'credibly', 'distinctively', 'dramatically', 'dynamically', 'efficiently',
  //   'energistically', 'enthusiastically', 'globally', 'holisticly', 'interactively', 'intrinsically', 'monotonectally',
  //   'objectively', 'phosfluorescently', 'proactively', 'professionally', 'progressively', 'quickly', 'rapidiously',
  //   'seamlessly', 'synergistically', 'uniquely', 'fungibly'
  // );

  var verbs = new Array(
    'generate', 'explore', 'design', 'document', 'implement', 'optimise', 'streamline', 'deploy', 'mock up', 'test',
    'architect', 'analyse', 'benchmark', 'create', 'enable', 'improve', 'refine', 'simplify', 'expand', 'refactor', 'scale',
    'dockerise', 'package', 'functional test', 'localise', 'create', 'anonymise', 'spike', 'configure', 'publish', 'add support for',
    'modify', 'integrate', 'persist', 'tune'
  );


  var the = new Array(
    ' the ', ' '
  );

  var adjectives = new Array(
    'adaptive', 'alternative', 'expanded array of', 'B2B', 'B2C', 'backend',
    'backward-compatible', 'business',
    'client-based', 'client-centered', 'client-centric', 'client-focused',
    'cost effective', 'cross functional', 'cross-platform',
    'customized', 'distributed', 'dynamic',
    'effective', 'efficient', 'end-to-end',
    'enterprise', 'extensible',
    'flexible', 'front-end', 'fully researched', 'fully tested', 'functional',
    'high-quality', 'innovative',
    'integrated', 'interactive', 'interoperable', 'intuitive',
    'maintainable',
    'open-source', 'optimal', 'orthogonal', 'out-of-the-box',
    'parallel', 'performance based',
    'real-time', 'reliable',
    'robust', 'scalable', 'seamless', 'stand-alone',
    'standardized', 'standards compliant', 'sustainable',
    'tactical', 'team building', 'team driven', 'transparent',
    'user friendly',
    'cloud-based', 'elastic', 'hyper-scale',
    'on-demand', 'cloud-centric', 'agile', 'static', 'automated', 
    'browser-based', 'dynamic', 'secure', 'proprietary', 'testable', 'fully-testable'
  );

  var nouns = new Array(
    // 'action items', 'alignments', 'applications', 'architectures', 'bandwidth', 'benefits',
    // 'best practices', 'catalysts for change', 'channels', 'collaboration and idea-sharing', 'communities', 'content',
    // 'convergence', 'core competencies', 'customer service', 'data', 'deliverables', 'e-business', 'e-commerce', 'e-markets',
    // 'e-tailers', 'e-services', 'experiences', 'expertise', 'functionalities', 'growth strategies', 'human capital',
    // 'ideas', 'imperatives', 'infomediaries', 'information', 'infrastructures', 'initiatives', 'innovation',
    // 'intellectual capital', 'interfaces', 'internal or "organic" sources', 'leadership', 'leadership skills',
    // 'manufactured products', 'markets', 'materials', 'meta-services', 'methodologies', 'methods of empowerment', 'metrics',
    // 'mindshare', 'models', 'networks', 'niches', 'niche markets', 'opportunities', '"outside the box" thinking', 'outsourcing',
    // 'paradigms', 'partnerships', 'platforms', 'portals', 'potentialities', 'process improvements', 'processes', 'products',
    // 'quality vectors', 'relationships', 'resources', 'results', 'ROI', 'scenarios', 'schemas', 'services', 'solutions',
    // 'sources', 'strategic theme areas', 'supply chains', 'synergy', 'systems', 'technologies', 'technology',
    // 'testing procedures', 'total linkage', 'users', 'value', 'vortals', 'web-readiness', 'web services', 'fungibility',
    // 'clouds', 'nosql', 'storage', 'virtualization', 'scrums', 'sprints', 'wins',

    'MVP', 'proof of concept', 'documentation', 'unit tests', 'Docker images', 'VMs', 'database architecture', 'database',
    'tables', 'SEG', 'SWG', 'IG framework', 'product teams', 'APIs', 'User Interfaces', 'user personas', 'IG database tables', 'reports',
    'dashboards', 'Logi reports', 'Dogfood data', 'Dogfood database', 'React front-end app', 'REST API', 'Spring Boot API', 'Swagger definition',
    'GitHub repo', 'common VM', 'JWT token code', 'RedHat config', 'SEG documentation', 'email gateway', 'Dogfood servers', 'sprints', 'users',
    'platforms', 'web gateway', 'Aha ideas', 'enhancement requests', 'Git migration', 'Jenkins jobs', 'platform releases', 'install script', 'functionality',
    'alert system', 'auditing system', 'Logi SecureKey system'
  );

  adjectives = randomarray(adjectives);
  nouns = randomarray(nouns);
  // adverbs = randomarray(adverbs);
  verbs = randomarray(verbs);

  var x;

  // //  var statement = adverbs[adverbs.length-1];
  // //  adverbs.length -= 1;
  //  var statement = '';
  //  statement = statement + " " + verbs[verbs.length-1];
  //  verbs.length -= 1;
  //  statement = statement + " " + adjectives[adjectives.length-1];
  //  adjectives.length -= 1;
  //  statement = statement + " " + nouns[nouns.length-1];
  //  nouns.length -= 1;

  //return statement;
  let task = verbs[verbs.length - 1];
  verbs.length -= 1;
  
  if (Math.random() > 0.5) {
    task += ' and ' + verbs[verbs.length - 1];
    verbs.length -= 1;    
  }

  task += oneOf(the) + adjectives[adjectives.length - 1] + ' ' + nouns[nouns.length - 1];
  adjectives.length -= 1;
  nouns.length -= 1;

  return capitalizeFirstLetter(task);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default generateTask;