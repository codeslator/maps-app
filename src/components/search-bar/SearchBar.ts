import { computed, defineComponent, ref } from "vue";
import SearchResults from '@/components/search-result/SearchResults.vue'
import { usePlaces } from "@/hooks";

export default defineComponent({
  name: 'SearchBar',
  components: {
    SearchResults,
  },
  setup() {
    const { searchPlacesByTerm } = usePlaces();
    const debounceValue = ref('');
    const debounceTimeout = ref();


    return {
      debounceValue,
      searchTerm: computed({
        get() {
          return debounceValue.value;
        },
        set(value: string) {
          if(debounceTimeout.value) clearTimeout(debounceTimeout.value); // Si ya esta un valor, lo limpia
          debounceTimeout.value = setTimeout(() => {
            debounceValue.value = value;
            searchPlacesByTerm(value);
          }, 500);
        }
      })
    };
  },
});