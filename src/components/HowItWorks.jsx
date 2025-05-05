import React from "react"

const HowItWorks = ({ sectionRef }) => {
	return (
		<section
			ref={sectionRef}
			className="how-it-works-section">
			<h1>How it Works?</h1>
			<p>
				SHA-1 processes data through a series of mathematical operations to
				generate a fixed-size 160-bit (20-byte) hash value.
			</p>
			<h2 className="title">Process</h2>

			<h3>1. Message Padding</h3>
			<p>
				Before anything else, the input (message) is prepared to meet SHA-1's
				format.
			</p>
			<ul className="list-content">
				<li>
					The original message is <span>padded</span> with a 1 bit (
					<code>1000...</code>) followed by 0s so that its length becomes{" "}
					<span>64 bits short of a multiple of 512</span>.
				</li>
				<li>
					The final 64 bits are used to store the original message length.
				</li>
			</ul>

			<p>
				This ensures the total message length is a multiple of{" "}
				<span>512 bits</span>.
			</p>

			<h3>2. Break Message into Blocks</h3>
			<p>
				The padded message is split into chunks called <span>message blocks</span>, each one
				exactly <span>512 bits (64 bytes)</span>.
			</p>

			<h3>3. Initialize Hash Values</h3>
			<p>SHA-1 uses <span>five fixed 32-bit words</span> as initial hash values:</p>
			<ol className="list-content">
				<li>h0 = 0x67452301 </li>
				<li>h1 = 0xEFCDAB89 </li>
				<li>h2 = 0x98BADCFE </li>
				<li>h3 = 0x10325476 </li>
				<li>h4 = 0xC3D2E1F0 </li>
			</ol>
			<p>These will be updated repeatedly through the hashing process.</p>

      <h3>4. Process Each 512-bit Block</h3>
      <p>Each message block goes through <span>80 rounds</span> of calculations using:</p>
      <ul className="list-content">
        <li><span>Bitwise operations</span> (AND, OR, XOR, NOT)</li>
        <li><span>Left bit rotations</span></li>
        <li><span>Modular addition</span></li>
        <li><span>Logical functions (f)</span> based on different phases</li>
      </ul>
      <p>The rounds are grouped into <span>four stages</span> of 20 rounds each, each using a different constant and function.</p>

      <h3>5. Update Hash Values</h3>
      <p>After processing a block, the results <span>are added to the current hash values</span> (<code>h0</code> to <code>h4</code>). These updated values become the starting point for the next block.</p>

      <h3>6. Produce Final Hash</h3>
      After all blocks are processed, the five 32-bit words (<code>h0</code> to <code>h4</code>) are concatenated to produce the <span>final 160-bit SHA-1 hash</span>.

      <h2>Example</h2>

			<table className="custom-table">
				<thead>
					<tr>
						<th>Input</th>
						<th>SHA-1 Hash</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>abC</td>
						<td>57babce0612ae7c07c380ddd1fb9d6b4c0dc1033</td>
					</tr>
				</tbody>
			</table>

      <p>Even a tiny change in input, like <code>aBc</code>, will generate a <span>completely different hash</span> — this is called the <span>avalanche effect</span>.</p>
		</section>
	)
}

export default HowItWorks
