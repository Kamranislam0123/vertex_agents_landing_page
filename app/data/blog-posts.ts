export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  readTime: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "rogue-agent-guardrails",
    title: "Rise of the Rogue Agent: Why AI Trading Needs Verifiable Guardrails",
    excerpt: "Exploring critical security failure modes for autonomous trading agents: AI hallucinations, model compromise, and the advisory gap in crypto risk management.",
    date: "April 9, 2026",
    author: "Vertex Sentinel Team",
    tags: ["AI Trading Security", "DeFi Safety"],
    readTime: "5 min read",
    content: `
      <p>As autonomous AI agents begin to manage billions in on-chain assets, the surface area for catastrophic failure has shifted from human error to algorithmic instability. The "Rogue Agent" problem isn't just science fiction—it's a multi-vector security challenge that current DeFi infrastructure is ill-equipped to handle.</p>
      
      <h3>The Three Pillars of Agent Failure</h3>
      <p>1. <strong>AI Hallucinations:</strong> An LLM might perfectly follow logic but hallucinate a non-existent liquidity pool or misinterpret a complex smart contract ABI, leading to "correctly executed" but economically disastrous trades.</p>
      <p>2. <strong>Model Compromise:</strong> If an agent's underlying model is fine-tuned or prompted with malicious intent (prompt injection), it can be coerced into draining its own treasury.</p>
      <p>3. <strong>The Advisory Gap:</strong> Most risk management systems are reactive. AI agents operate at millisecond speeds, requiring proactive, verifiable guardrails that exist outside the model's own logic controllers.</p>

      <h3>Enter The Sentinel Layer</h3>
      <p>Our research shows that the only way to safely deploy autonomous agents is through a decoupled verification layer. By moving the "Intent Verification" away from the AI and onto a cryptographically secured guardrail, we ensure that even a compromised or hallucinating agent cannot violate its core economic safety parameters.</p>
    `
  },
  {
    id: 2,
    slug: "erc-8004-verifiable-intent",
    title: "Deep Dive into ERC-8004: Standardizing Verifiable AI Intent on Ethereum",
    excerpt: "How Vertex Sentinel leverages the ERC-8004 standard and EIP-712 typed signatures to verify agent identity and trade intent for institutional DeFi.",
    date: "April 10, 2026",
    author: "Vertex Engineering",
    tags: ["ERC-8004", "Ethereum Protocol"],
    readTime: "8 min read",
    content: `
      <p>Standardization is the bedrock of interoperability. For AI agents to move seamlessly across the Ethereum ecosystem, we need a universal way to define what an agent is and what it is allowed to do. ERC-8004 provides the framework for this "Verifiable Intent."</p>

      <h3>Identity Meets Intent</h3>
      <p>ERC-8004 introduces a standard for signing agent actions. Using EIP-712 typed data, an agent can present a cryptographically signed "Intent" that specifies exactly which assets it wants to move and under what conditions. This signature is then verified against a registered Agent Profile on the Sentinel Layer.</p>

      <h3>Why It Matters for Institutions</h3>
      <p>Institutional liquidity requires absolute certainty. By adopting ERC-8004, Vertex Sentinel allows institutions to set granular permissions—such as "Max Slippage 0.5%" or "Only Trade WBTC/ETH"—that are enforced at the protocol level, not just the application level.</p>
    `
  },
  {
    id: 3,
    slug: "ai-execution-security-kraken",
    title: "AI Execution Security: Bridging LLMs to Kraken via MCP and Secure CLI",
    excerpt: "Securing the interface between Large Language Models and live exchanges using the Model Context Protocol (MCP) and isolated key management systems.",
    date: "April 11, 2026",
    author: "Vertex Product",
    tags: ["Kraken CLI", "MCP Security"],
    readTime: "6 min read",
    content: `
      <p>Connecting a Large Language Model directly to an exchange API is like handing a blank check to a genius toddler. It's powerful, but dangerous. At Vertex, we've developed a secure bridge using the Model Context Protocol (MCP) to ensure execution remains isolated from the model's "thinking" process.</p>

      <h3>The MCP Advantage</h3>
      <p>MCP allows us to expose limited, stateless tools to the LLM. Instead of the model having access to API keys, it simply requests an action from the MCP Server. The server verifies the request against the Sentinel Guardrails before signing the actual transaction with Kraken.</p>

      <h3>Hardware-Level Isolation</h3>
      <p>By using isolated key management systems (KMS), the actual execution keys never touch the environment where the AI model is running. This creates a hard physical barrier between the intelligence layer and the value-transfer layer.</p>
    `
  }
];
