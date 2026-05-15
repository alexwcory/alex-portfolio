export default function GreenWalletPage() {
  return (
    <main className="min-h-screen px-8 py-16 max-w-4xl mx-auto text-gray-900 dark:text-gray-100">
      <article className="space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            GreenWallet - Blockchain Efficiency Credentials via Soulbound Tokens
          </h1>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
            GreenWallet is a full-stack Web3 application that addresses one of
            the most persistent criticisms of blockchain adoption: the
            environmental footprint of on-chain activity. The project tackles
            this by establishing a transparent, immutable reputation layer on
            Ethereum - one that monitors wallet behavior across chains, computes
            an efficiency score, and mints Soulbound Tokens (SBTs) as
            non-transferable, publicly verifiable credentials tied to a
            wallet&apos;s green standing.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            The core thesis is that incentivizing energy-conscious blockchain
            usage requires credentialing infrastructure. If wallets with strong
            efficiency profiles receive tamper-proof, wallet-bound badges, it
            creates a social and economic signal that DeFi protocols, DAOs, and
            dApps can integrate into their own access control and governance
            logic.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Problem Statement</h2>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Public blockchains, particularly proof-of-work chains, generate
            significant energy overhead - and even post-Merge Ethereum activity
            carries a per-transaction carbon cost. Existing solutions are
            either entirely off-chain (carbon offset platforms) or rely on
            trusted third parties. There is no native, on-chain mechanism that
            converts a wallet&apos;s behavioral history into a verifiable
            sustainability credential. GreenWallet attempts to build that
            primitive.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Architecture</h2>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            The project is deliberately modular, following a
            separation-of-concerns design across seven Solidity contracts and
            two off-chain services (a React frontend and a Node.js monitor
            daemon).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Smart Contract Layer (Solidity ^0.8.19, OpenZeppelin ^4.9)
          </h2>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            The contract system is structured around a registry-and-delegation
            pattern.
          </p>
          <div className="space-y-4">
            <div className="border border-gray-300 dark:border-gray-600 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-2">GreenWallet.sol</h3>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                The central orchestrator. It maintains
                <code>transactions[walletAddress][chainName]</code> to track
                cross-chain activity volume per wallet. It references the
                MintingManager, MintingRegistry, and tier NFT contracts, and
                exposes <code>updateTransactions</code> (callable by the
                off-chain monitor) and <code>addIntoContract</code> (for
                first-time wallet registration). Every update triggers re-score
                and mint-eligibility evaluation.
              </p>
            </div>

            <div className="border border-gray-300 dark:border-gray-600 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-2">MintingManager.sol</h3>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                Encapsulates scoring logic and minting rules.
                <code>calculateScore</code> computes wallet efficiency, and
                <code>mintSBTLogic</code> enforces tier thresholds by
                dispatching to MintingHandler when a wallet crosses a new tier
                for the first time. Thresholds are intentionally separated from
                NFT contracts so scoring can evolve independently.
              </p>
            </div>

            <div className="border border-gray-300 dark:border-gray-600 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-2">MintingHandler.sol</h3>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                Routing contract that maps tier identifiers to TierOne,
                TierTwo, or TierThree contracts and calls mint. This isolates
                orchestrator logic from concrete NFT tier implementations.
              </p>
            </div>

            <div className="border border-gray-300 dark:border-gray-600 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-2">MintingRegistry.sol</h3>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                On-chain mint history ledger. <code>hasMintedSBT</code> prevents
                duplicate mints, and <code>getAllMintedSBTs</code> exposes full
                credential history per wallet.
              </p>
            </div>

            <div className="border border-gray-300 dark:border-gray-600 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-2">TierRegistry.sol</h3>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                Configurable catalog of tier definitions (name, score threshold,
                contract address) governed by owner permissions. New tiers can
                be registered without redeploying core contract logic.
              </p>
            </div>

            <div className="border border-gray-300 dark:border-gray-600 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-2">
                TierOne / TierTwo / TierThree (ERC721URIStorage)
              </h3>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                Each tier is an ERC721 collection with URI-backed metadata.
                All implement soulbound mechanics: <code>transferFrom</code> and
                <code>safeTransferFrom</code> revert unconditionally,
                <code>approve</code> only accepts <code>address(0)</code>, and
                <code>setApprovalForAll</code> is disabled. This enforces
                non-transferability at the EVM level.
              </p>
            </div>

            <div className="border border-gray-300 dark:border-gray-600 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-2">
                StringArrayUtils.sol
              </h3>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                Utility library for <code>contains</code>, <code>remove</code>,
                and <code>findIndex</code> on dynamic string arrays, used by
                registry contracts for tier-list management.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Off-Chain Monitor (Node.js + Express)
          </h2>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            The monitor acts as a lightweight oracle bridge. It maintains a set
            of registered wallets, polls new Ethereum blocks (Infura on Sepolia
            testnet), inspects <code>from</code>/<code>to</code> fields, and
            submits <code>updateTransactions</code> calls when monitored wallets
            appear. The result is a live loop:
            on-chain activity → off-chain detection → on-chain update →
            score recalculation → conditional SBT minting.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            The service exposes REST endpoints (
            <code>POST /addAddress</code>, <code>POST /removeAddress</code>,{" "}
            <code>GET /addresses</code>) with CORS configured for the Vite dev
            origin, letting the frontend register wallet monitoring without an
            extra backend layer.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Frontend (React 18, Vite 5, MUI 6, Web3.js v4)
          </h2>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            The frontend allows users to register wallet addresses for
            monitoring, reads contract state through Web3.js, and displays each
            wallet&apos;s Green Score and tier credentials. During development,
            the UI targets a local Ganache node and resolves GreenWallet
            addresses via Vite environment variables injected by Truffle
            migrations.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Key Blockchain Concepts Applied
          </h2>
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-3">
            <li>
              <strong>Soulbound tokens (EIP-5192 inspired):</strong> SBT rules
              are enforced in Solidity by overriding transfer/approval paths,
              not by front-end-only constraints.
            </li>
            <li>
              <strong>On-chain/off-chain coordination:</strong> monitor service
              behaves like an event-driven oracle/relayer, demonstrating trusted
              automation tradeoffs similar to keeper patterns.
            </li>
            <li>
              <strong>Multi-chain architecture:</strong> transaction state is
              keyed by <code>(wallet, chainName)</code>, with monitor config
              designed to support multiple RPC networks.
            </li>
            <li>
              <strong>Registry/delegation design:</strong> tier config, mint
              history, routing, and scoring are separated into discrete modules
              for maintainability and upgrade flexibility.
            </li>
            <li>
              <strong>OpenZeppelin standards:</strong> uses ERC721URIStorage and
              Ownable patterns for robust NFT behavior and access control.
            </li>
            <li>
              <strong>Testnet integration:</strong> Sepolia + Infura wiring goes
              beyond local-only blockchain demos.
            </li>
          </ul>
        </section>

        <section className="space-y-4 pb-8">
          <h2 className="text-2xl font-semibold">Engineering Takeaways</h2>
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
            <li>
              ERC721 internals adapted for non-transferable credential tokens.
            </li>
            <li>
              Multi-contract architecture with clear interfaces and
              upgrade-aware separation of concerns.
            </li>
            <li>
              Off-chain relayer/oracle flow that drives on-chain state updates.
            </li>
            <li>
              Access-control patterns using Ownable roles, operator wallets,
              and function-level guards.
            </li>
            <li>
              End-to-end delivery across Solidity, Truffle, Ganache, Web3.js,
              React, Node.js, and Infura.
            </li>
            <li>
              Practical implementation of identity primitives around
              sustainability signaling.
            </li>
            <li>
              Chain-agnostic credential data modeling for multi-network usage.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
