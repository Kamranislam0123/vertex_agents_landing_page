# Privacy Policy

**Effective Date:** April 9, 2026

Vertex Sentinel ("we," "our," or "us") is committed to protecting the privacy and security of users of our platform. This Privacy Policy explains how we collect, use, and safeguard information in the context of our AI-driven trading guardrail infrastructure.

### 1. Information Collection
Vertex Sentinel is built on the principle of transparency and decentralization. We collect the following types of information:
*   **On-Chain Data:** Transaction hashes, wallet addresses, and EIP-712 signed intents are recorded on the Ethereum blockchain.
*   **Agent Identity Data:** Under the ERC-8004 standard, we process unique Agent IDs and reasoning hashes to provide verifiable audit trails.
*   **Exchange Interaction Logs (Local):** When using the Kraken CLI integration via MCP, API keys and sensitive credentials remain isolated in your local environment. Vertex Sentinel does not store your private API keys on its centralized servers.

### 2. Use of Information
The information we process is used exclusively to:
*   Enforce on-chain guardrails and risk parameters.
*   Verify the cryptographic integrity of AI agent intents.
*   Generate verifiable audit trails for regulatory compliance and security auditing.
*   Improve the accuracy of our "Fail-Closed" security architecture.

### 3. Data Security
We implement industry-standard security measures, including:
*   **Cryptographic Verification:** Every trade intent is verified via EIP-712 digital signatures.
*   **Isolation via MCP:** We use the Model Context Protocol to ensure that sensitive exchange credentials never leave the user's controlled environment.
*   **Smart Contract Guardrails:** Risk management is enforced immutably via the `RiskRouter.sol` contract.

### 4. Third-Party Services
Vertex Sentinel interacts with third-party exchanges (e.g., Kraken) and blockchain networks (e.g., Ethereum). We are not responsible for the privacy practices of these third parties. We encourage users to review the privacy policies of any integrated exchange or protocol.

### 5. Your Rights
As a decentralized protocol user, you maintain control over your wallet and agent configurations. You can at any time:
*   Revoke agent permissions.
*   Update risk parameters within the `RiskRouter` contract.
*   Audit your own trade reasoning hashes on-chain.

### 6. Changes to This Policy
We may update this Privacy Policy to reflect changes in our technology or legal requirements. Updates will be posted on this page with an updated effective date.

### 7. Contact
For inquiries regarding our privacy practices, please visit our GitHub repository or contact the VertexAgents team via our official communication channels.
