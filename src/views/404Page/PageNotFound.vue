<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <span>404</span>
      </div>
      <div class="col-8">
        <h1>Oops! That page can't be found.</h1>
        <span
          >It looks like nothing was found at this location. Maybe try one of
          the links below or a search?</span
        >
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.container {
  padding: 6rem 0;
}
.col-4 > span {
  display: block;
  width: 100%;
  font-size: 10rem;
  text-align: center;
  color: #ccc;
}

.col-8 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.col-8 > h1 {
  font-size: 3rem;
  font-weight: 800;
}

.col-8 > span {
  color: #ccc;
}
</style>
