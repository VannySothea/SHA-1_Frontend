import React from "react"

const Security = ({ sectionRef }) => {
	return (
		<section
			ref={sectionRef}
			className="security-section">
			<h1>Security & Weaknesses</h1>
			<p>
				SHA-1 was once a cornerstone of cryptographic security, but it is now
				considered <span>insecure and obsolete</span>. Over the past two
				decades, researchers have discovered serious vulnerabilities that make
				SHA-1 unsuitable for modern security applications.
			</p>

			<h3>1. Collision Attacks</h3>
			<p>
				A <span>collision</span> occurs when two different inputs produce the
				same hash output. In a secure hash function, this should be
				computationally infeasible.
			</p>
			<p>
				However, SHA-1 is <span>no longer collision-resistant.</span>
			</p>
			<p>
				<span>Notable Collision Attacks:</span>
			</p>
			<ul className="list-content">
				<li>
					<span>2005</span>: Cryptanalysts Wang et al. discovered theoretical
					collision attacks that broke SHA-1’s original security margin.
				</li>
				<li>
					<span>2017 - SHAttered</span>: Google and CWI Amsterdam demonstrated
					the first practical collision for SHA-1 using two crafted PDF files:
					<ul>
						<li>Same SHA-1 hash</li>
						<li>Different content</li>
						<li>Cost: ~110 GPU years</li>
					</ul>
				</li>
			</ul>
			<a
				className="link"
				href="https://shattered.io/"
				target="_blank"
				rel="noopener noreferrer">
				<i className="fa-solid fa-paperclip"></i>
				<p>SHAttered Official Site</p>
			</a>

			<h3>2. Chosen-Prefix Collisions</h3>
			<p>
				A more powerful form of collision, where an attacker can choose two
				different prefixes and append arbitrary data to generate the same SHA-1
				hash.
			</p>

			<p>
				2020 - <span>"SHA-1 is a Shambles" attack</span>:
			</p>
			<ul className="list-content">
				<li>Able to forge PGP/Git commits or TLS certificates with the same SHA-1 hash.</li>
				<li>Practical for attackers with access to moderate computing power (cost estimated under $100,000).</li>
			</ul>
			<a
				className="link"
				href="https://sha-mbles.github.io/"
				target="_blank"
				rel="noopener noreferrer">
				<i className="fa-solid fa-paperclip"></i>
				<p>SHA-1 is a Shambles (CWI + INRIA)</p>
			</a>

			<h3>3. Real-World Impact</h3>
			<ul className="list-content">
				<li><span>Web browsers</span> (Chrome, Firefox) have <span>rejected SHA-1 SSL certificates</span>.</li>
				<li><span>Certificate Authorities</span> are no longer allowed to issue SHA-1-signed certs.</li>
				<li><span>Git</span> (a version control system that uses SHA-1) is <span>transitioning to SHA-256</span> due to risk of tampered commits.</li>
			</ul>

			<h3>Why This Matters</h3>
			<table className="custom-table">
				<thead>
					<tr>
						<th>Vulnerability</th>
						<th>Risk</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Digital signature spoofing</td>
						<td>Attackers can forge signed documents/certs</td>
					</tr>
					<tr>
						<td>Software integrity failure</td>
						<td>Malicious code can masquerade as authentic</td>
					</tr>
					<tr>
						<td>Identity impersonation</td>
						<td>Fake credentials can be made to match real ones</td>
					</tr>
					<tr>
						<td>Long-term data risk</td>
						<td>Archived or timestamped SHA-1 signatures are vulnerable</td>
					</tr>
				</tbody>
			</table>

			<h3>Recommendation</h3>
			<p><span className="warn">Do not use SHA-1 for any security-critical function. It is considered broken and deprecated.</span></p>
			<p><span>Use Instead:</span></p>
			<ul className="list-content">
				<li><span>SHA-256</span> or <span>SHA-3</span> for secure hashing</li>
				<li><span>HMAC-SHA-256</span> for message authentication</li>
				<li><span>BLAKE3</span> for speed + modern security</li>
			</ul>
		</section>
	)
}

export default Security
