<template>
  <div>
    <div>
      <VModal
        :header="true"
        :footer="false"
        name="search-modal"
        class="!max-w-3xl !w-full sm:w-80 max-h-screen"
        :closeOnClickOutside="true"
      >
        <template #header>
          <div class="flex items-center justify-between w-full">
            <span class="text-black text-2xl font -semibold">Search</span>
            <button
              @click="closeModal()"
              class="flex items-center justify-center"
            >
              <IconMdiClose class="text-black h-8 w-8" />
            </button>
          </div>
          <!-- You can put close button here -->
        </template>
        <template #default>
          <div class="flex flex-col items-center justify-center border-b p-4">
            <input
              type="text"
              placeholder="Search for Keyword"
              v-model="searchKey"
              @input="searchChange($event)"
              class="text-xl p-2 border border-gray-500 rounded"
            />
          </div>
          <div
            class="flex items-center justify-center p-2 overflow-auto flex-col"
            @click="getNews"
          >
            <span class="text-xl text-black">: Results :</span>
            <div>
              <div v-for="(news, i) in searchResult" :key="i" class="">
                {{ news.title }}
              </div>
            </div>
          </div>
        </template>
      </VModal>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { debounce } from "lodash-es";
export default {
  debounce,
  data() {
    return {
      searchKey: null,
      searchResult: [],
    };
  },
  methods: {
    closeModal() {
      this.$boilerplate.modal.close("search-modal");
    },
    searchChange: debounce(function (e) {
      this.getNews();
    }, 1000),
    async getNews() {
      try {
        console.log();
        const result = await axios.get(
          `https://newsapi.org/v2/everything?q=${this.searchKey}&apiKey=0071539569454e72b1ae25a7074b1845`
        );
        this.searchResult = result?.data?.articles;
        console.log(result);
      } catch (e) {
        console.log("Error While Fetching : ", e);
      }
    },
  },
};
</script>
