<h2>GitHub Page</h2>
<a href="https://adcodffunnan.github.io/findmovie/">https://adcodffunnan.github.io/findmovie/</a><br/>

<h2>About</h2>
<p>
The app have the functionalities of displaying the top 10 rated TV shows and the top 10 movies, a search function for both and a detail view for individual items. The app is responsive.
</p>

<h2>Cloning and Running the app in Local</h2>
<p>Clone the project into local</p>

<pre>
	<code class="language-bash">git clone https://github.com/adcodFfunnan/findmovie.git</code>
</pre>
<p>next in file Show.tsx change</p>
<pre>
	<p class="language-bash"><Redirect exact from="/findmovie/" to="/tvshows" /></p>
</pre>
<p>with</p>
<pre>
    <Redirect exact from="/" to="/tvshows" />
</pre>
<p>next open your project folder</p>
<pre>
	<code class="language-bash">cd findmovie</code>
</pre>
<p>next type</p>
<pre>
	<code class="language-bash">npm install</code>
    <code class="language-bash">    npm start</code>
</pre>