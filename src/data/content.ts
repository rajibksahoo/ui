import { Project, Article, Video, Experience, Skill } from '@/types';

export const personalInfo = {
  name: 'Rajib Sahoo',
  title: 'Senior Backend Engineer',
  subtitle: 'Java, Spring Boot, Distributed Systems',
  tagline:
    'I build scalable backend systems, APIs, and data platforms used by thousands of users.',
  email: 'your.email@example.com',
  github: 'https://github.com/rajibksahoo',
  linkedin: 'https://linkedin.com/in/rajibksahoo',
  resume: '/resume.pdf',
  location: 'Remote',
};

export const projects: Project[] = [
  {
    id: 'distributed-cache',
    name: 'Distributed Cache Layer',
    shortDescription:
      'Multi-region, high-throughput cache cluster handling 1M+ requests/sec',
    longDescription:
      'Built a custom distributed caching solution to replace centralized Redis, enabling multi-region deployment with automatic failover and significantly reduced latency.',
    problemStatement:
      'Single Redis cluster became a bottleneck at scale. Centralized architecture caused 15% latency spike during peak traffic and complex failover scenarios.',
    solution:
      'Implemented a custom distributed cache using consistent hashing, gossip protocol for state sync, and local in-memory layers. Multi-region setup with automatic replication and conflict resolution.',
    keyDecisions: [
      'Consistent hashing instead of traditional sharding for easier scaling',
      'Gossip protocol for eventual consistency without requiring consensus',
      'Tiered caching with L1 (in-memory) and L2 (distributed)',
      'Built LRU eviction policy with custom metrics',
    ],
    tradeoffs: [
      'Eventual consistency vs strong consistency (acceptable for use case)',
      'Higher operational complexity vs significant performance gains',
      'Custom maintenance overhead vs avoiding vendor lock-in',
    ],
    whatNext:
      'Implement read-through caching strategy, add predictive pre-warming, optimize memory utilization with compression',
    techStack: ['Java', 'Spring Boot', 'Netty', 'Protocol Buffers', 'AWS', 'Docker'],
    tags: ['Microservices', 'High Throughput', 'Caching', 'Distributed Systems'],
    metrics: {
      throughput: '1.2M requests/sec',
      latency: 'p99: 5ms (vs 45ms before)',
      users: '500K+ daily',
    },
    links: {
      github: 'https://github.com/yourusername/distributed-cache',
      article: 'https://medium.com/@yourusername/building-distributed-cache',
      video: 'https://youtu.be/example',
    },
    featured: true,
  },
  {
    id: 'event-streaming-platform',
    name: 'Real-time Event Streaming Platform',
    shortDescription:
      'Event-driven architecture supporting 10M+ events/day with guaranteed delivery',
    longDescription:
      'Designed and implemented an event streaming platform using Kafka as the backbone, enabling event-driven microservices with exactly-once semantics and full audit trail.',
    problemStatement:
      'Monolithic application with tight coupling made scaling individual services impossible. No clear event flow or audit trail.',
    solution:
      'Event-driven architecture with Kafka as event backbone. Implemented event sourcing for audit trail, CQRS pattern for reads/writes separation, and event schema registry for versioning.',
    keyDecisions: [
      'Kafka over message queue for append-only log and consumer offset management',
      'Event sourcing as source of truth for all state changes',
      'Dead letter queues for handling poison messages',
      'Schema registry for enforcing contract versioning',
    ],
    tradeoffs: [
      'Increased operational complexity vs decoupled architecture',
      'Higher storage requirements vs better auditability',
      'Eventual consistency challenges vs system independence',
    ],
    whatNext:
      'Implement more sophisticated dead letter queue handling, add stream processing for real-time analytics, optimize Kafka retention policies',
    techStack: ['Kafka', 'Spring Boot', 'PostgreSQL', 'Protocol Buffers', 'Kubernetes'],
    tags: ['Event-Driven', 'Messaging', 'Microservices', 'Data Platforms'],
    metrics: {
      throughput: '10M events/day',
      latency: 'p99: <100ms',
      uptime: '99.99%',
    },
    links: {
      github: 'https://github.com/yourusername/event-streaming',
      article: 'https://dev.to/@yourusername/event-driven-architecture',
    },
    featured: true,
  },
  {
    id: 'graphql-gateway',
    name: 'GraphQL API Gateway',
    shortDescription: 'Type-safe GraphQL federation layer with 3x faster queries',
    longDescription:
      'Built a GraphQL gateway using Apollo Federation to unify multiple microservices APIs, enabling clients to fetch exactly what they need while maintaining strong typing.',
    problemStatement:
      'REST APIs caused N+1 query problems. Clients had to make multiple requests, and versioning management was complex.',
    solution:
      'Implemented Apollo Federation with schema stitching, field-level resolvers, and batching to prevent N+1 queries. Added caching layer at gateway level.',
    keyDecisions: [
      'Federation over monolithic schema for independent service evolution',
      'Batching data loader pattern to prevent N+1 queries',
      'Schema directives for auth and rate limiting',
      'Custom execution tracing for debugging',
    ],
    tradeoffs: [
      'GraphQL complexity vs developer experience gains',
      'Additional layer adds latency vs unified query interface benefits',
    ],
    whatNext: 'Add subscription support, implement real-time subscriptions, optimize federation hints',
    techStack: ['GraphQL', 'Apollo Federation', 'Node.js', 'TypeScript', 'Redis'],
    tags: ['GraphQL', 'API Design', 'Microservices'],
    metrics: {
      latency: '3x query reduction',
    },
    links: {
      github: 'https://github.com/yourusername/graphql-gateway',
    },
    featured: false,
  },
];

export const articles: Article[] = [
  {
    id: 'distributed-tracing',
    title: 'Implementing Distributed Tracing at Scale: Lessons from Production',
    description:
      'Deep dive into OpenTelemetry, sampling strategies, and how we reduced debugging time by 80%',
    platform: 'medium',
    url: 'https://medium.com/@yourusername/distributed-tracing',
    readingTime: 15,
    date: '2024-01-15',
    tags: ['Observability', 'Distributed Systems', 'DevOps'],
    featured: true,
  },
  {
    id: 'java-concurrency',
    title: 'Java Concurrency Patterns: Mastering Virtual Threads and Structured Concurrency',
    description:
      'Exploring Java 21 virtual threads, structured concurrency APIs, and migration strategies from traditional async',
    platform: 'dev.to',
    url: 'https://dev.to/yourusername/java-virtual-threads',
    readingTime: 18,
    date: '2024-01-10',
    tags: ['Java', 'Concurrency', 'Performance'],
    featured: true,
  },
  {
    id: 'database-scaling',
    title: 'Database Scaling Strategies: Sharding, Replication, and When to Use Each',
    description:
      'Comprehensive guide to database scaling with real-world examples and trade-off analysis',
    platform: 'dev.to',
    url: 'https://dev.to/yourusername/database-scaling',
    readingTime: 22,
    date: '2023-12-20',
    tags: ['Databases', 'Architecture', 'Scale'],
    featured: false,
  },
  {
    id: 'kafka-patterns',
    title: 'Kafka Design Patterns: Exactly-Once Processing and Idempotency at Scale',
    description:
      'Battle-tested patterns for reliable message processing with Kafka and handling failure scenarios',
    platform: 'medium',
    url: 'https://medium.com/@yourusername/kafka-patterns',
    readingTime: 20,
    date: '2023-12-10',
    tags: ['Kafka', 'Messaging', 'Reliability'],
    featured: false,
  },
];

export const videos: Video[] = [
  {
    id: 'system-design-cache',
    title: 'System Design: Building a Distributed Cache from Scratch',
    description:
      'Complete walkthrough of designing and implementing a distributed cache layer for high-throughput systems',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '52:30',
    category: 'system-design',
    date: '2024-01-20',
    tags: ['System Design', 'Caching', 'Architecture'],
  },
  {
    id: 'code-walkthrough-event-streaming',
    title: 'Code Walkthrough: Event-Driven Architecture with Kafka and Spring Boot',
    description:
      'Detailed code walkthrough of implementing event-driven microservices with guaranteed delivery and audit trails',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '45:15',
    category: 'code-walkthrough',
    date: '2024-01-10',
    tags: ['Kafka', 'Spring Boot', 'Event-Driven'],
  },
  {
    id: 'performance-optimization',
    title: 'Performance Optimization: From 100ms to 5ms Latency',
    description:
      'Real-world case study on identifying and eliminating bottlenecks in a production system handling 1M req/sec',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '38:45',
    category: 'performance',
    date: '2024-01-05',
    tags: ['Performance', 'Optimization', 'Production'],
  },
  {
    id: 'java-fundamentals',
    title: 'Java 21 Features Deep Dive: Virtual Threads, Pattern Matching, Records',
    description:
      'Comprehensive overview of Java 21 features with practical examples and when to use each in production systems',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '68:30',
    category: 'fundamentals',
    date: '2023-12-28',
    tags: ['Java', 'Language Features', 'Fundamentals'],
  },
];

export const experience: Experience[] = [
  {
    id: 'exp-1',
    company: 'Tech Giant Inc.',
    role: 'Senior Backend Engineer',
    startDate: 'Jan 2022',
    current: true,
    description:
      'Led architecture and development of core backend services supporting millions of users globally',
    achievements: [
      'Designed and implemented distributed cache layer, reducing latency by 80%',
      'Built event-driven architecture supporting 10M+ daily events with exactly-once semantics',
      'Led migration from monolith to microservices, improving deployment velocity by 10x',
      'Mentored 5 junior engineers on system design and production best practices',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Kafka',
      'PostgreSQL',
      'Kubernetes',
      'AWS',
      'Docker',
      'gRPC',
    ],
  },
  {
    id: 'exp-2',
    company: 'Startup Scale-up',
    role: 'Backend Engineer',
    startDate: 'Jun 2019',
    endDate: 'Dec 2021',
    current: false,
    description: 'Built and scaled backend infrastructure for rapidly growing startup from 10K to 1M users',
    achievements: [
      'Implemented rate limiting and caching strategies, reducing database load by 60%',
      'Built GraphQL API gateway for unified microservices interface',
      'Established observability platform with distributed tracing',
      'Led on-call rotations and reduced MTTR from 2 hours to 15 minutes',
    ],
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'GraphQL', 'AWS'],
  },
  {
    id: 'exp-3',
    company: 'Mid-size Software Company',
    role: 'Software Engineer',
    startDate: 'Feb 2017',
    endDate: 'May 2019',
    current: false,
    description: 'Developed backend services for enterprise SaaS platform',
    achievements: [
      'Built REST API serving 10K+ daily active users',
      'Optimized database queries, achieving 5x performance improvement',
      'Implemented comprehensive error handling and logging system',
    ],
    technologies: ['Java', 'Spring', 'MySQL', 'REST APIs', 'Git', 'Linux'],
  },
];

export const skills: Skill[] = [
  // Languages
  { name: 'Java', category: 'language', level: 'core' },
  { name: 'Go', category: 'language', level: 'strong' },
  { name: 'TypeScript', category: 'language', level: 'strong' },
  { name: 'Python', category: 'language', level: 'familiar' },
  { name: 'SQL', category: 'language', level: 'core' },

  // Frameworks
  { name: 'Spring Boot', category: 'framework', level: 'core' },
  { name: 'Spring Cloud', category: 'framework', level: 'strong' },
  { name: 'Node.js', category: 'framework', level: 'strong' },
  { name: 'Quarkus', category: 'framework', level: 'familiar' },

  // Databases
  { name: 'PostgreSQL', category: 'database', level: 'core' },
  { name: 'MySQL', category: 'database', level: 'core' },
  { name: 'MongoDB', category: 'database', level: 'strong' },
  { name: 'Redis', category: 'database', level: 'core' },
  { name: 'Cassandra', category: 'database', level: 'familiar' },

  // Messaging
  { name: 'Kafka', category: 'messaging', level: 'core' },
  { name: 'RabbitMQ', category: 'messaging', level: 'strong' },
  { name: 'gRPC', category: 'messaging', level: 'strong' },
  { name: 'REST APIs', category: 'messaging', level: 'core' },
  { name: 'GraphQL', category: 'messaging', level: 'strong' },

  // Cloud & DevOps
  { name: 'AWS', category: 'cloud', level: 'core' },
  { name: 'Kubernetes', category: 'cloud', level: 'core' },
  { name: 'Docker', category: 'cloud', level: 'core' },
  { name: 'Terraform', category: 'cloud', level: 'strong' },
  { name: 'GCP', category: 'cloud', level: 'strong' },
  { name: 'CI/CD', category: 'devops', level: 'core' },
  { name: 'Prometheus', category: 'devops', level: 'strong' },
  { name: 'ELK Stack', category: 'devops', level: 'strong' },
  { name: 'OpenTelemetry', category: 'devops', level: 'strong' },

  // Tools
  { name: 'Git', category: 'tool', level: 'core' },
  { name: 'Jira', category: 'tool', level: 'core' },
  { name: 'Datadog', category: 'tool', level: 'strong' },
];
