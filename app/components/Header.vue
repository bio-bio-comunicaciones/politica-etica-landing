<template>
	<header class="bg-white">
		<div class="border-b border-b-#8899a64d px-4 py-6.25 md:(py-2.25)">
			<div class="container">
				<NuxtLink to="https://www.biobiochile.cl">
					<img src="/assets/img/bbcl-logo-mobile.svg" height="30" width="80" alt="Logo BBCL" class="md:hidden">
					<NuxtPicture src="/assets/img/bbcl-logo-desktop.png" height="47" width="268" alt="Logo BBCL" class="hidden md:block" />
				</NuxtLink>
			</div>
		</div>
		<nav class="hidden border-b border-b-#8899a64d lg:block">
			<ul class="flex flex-wrap items-center justify-between py-3.25 text-3.25 text-#222 leading-none uppercase container">
				<li>
					<a href="https://www.biobiochile.cl/podcasts">Podcasts</a>
				</li>
				<li>
					<a href="https://www.biobiochile.cl/lista/categorias/nacional">Nacional</a>
				</li>
				<li>
					<a href="https://www.biobiochile.cl/lista/categorias/internacional">Internacional</a>
				</li>
				<li>
					<a href="https://www.biobiochile.cl/lista/categorias/economia">Economía</a>
				</li>
				<li>
					<a href="https://www.biobiochile.cl/portada/deportes">Deportes</a>
				</li>
				<li>
					<a href="https://www.biobiochile.cl/lista/categorias/tendencias">Tendencias</a>
				</li>
				<li>
					<a href="https://www.biobiochile.cl/lista/categorias/opinion">Opinión</a>
				</li>
				<li>
					<a href="https://www.biobiochile.cl/especial/bbcl-investiga">BBCL Investiga</a>
				</li>
				<li>
					<a href="https://legales.biobiochile.cl/">
						<NuxtPicture src="/assets/img/legales-logo.png" width="97" height="30" alt="Logo Avisos Legales" />
					</a>
				</li>
				<li>
					<a href="https://www.biobiochile.cl/biobiotv/">
						<NuxtPicture src="/assets/img/bbtv-logo.png" width="48" height="31" alt="Logo BBTV" />
					</a>
				</li>
				<li>
					<NuxtLink to="/">
						<img src="/assets/img/bbcl-en-5-minutos-header-logo.svg" width="116" height="32" alt="Logo BBCL en 5 minutos">
					</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>
