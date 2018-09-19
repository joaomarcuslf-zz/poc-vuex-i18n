import LanguageChanger from "@/components/LanguageChanger";
import Navlink from "@/components/Navlink";

export default {
  name: "Navbar",
  components: {
    LanguageChanger,
    Navlink
  },
  data() {
    return { showNav: false };
  }
};
