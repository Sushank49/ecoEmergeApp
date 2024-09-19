import { useEffect, useReducer } from "react";
import { createContext } from "react";
import { useContext } from "react";

// FIREBASE
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC2lpFzKdz2CJOKzw_1hxHdYdRZ-w3NzU4",
  authDomain: "ecoemerge-a4312.firebaseapp.com",
  projectId: "ecoemerge-a4312",
  storageBucket: "ecoemerge-a4312.appspot.com",
  messagingSenderId: "94372861119",
  appId: "1:94372861119:web:fe88e6e376222eccf4a20a",
  measurementId: "G-2E4H8YWHQK",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Context
const ArticlesContext = createContext();

const initialState = {
  articles: null,
  isLoading: false,
  error: "",
  selectedArticle: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "articles/loaded":
      return { ...state, articles: action.payload, isLoading: false };
    case "articles/upload":
      return {
        ...state,
        isLoading: false,
        articles: [...state.articles, action.payload].reverse(),
      };
    case "articles/show":
      return {
        ...state,
        isLoading: false,
        selectedArticle: action.payload,
      };
    case "loading":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

// eslint-disable-next-line react/prop-types
const ArticlesProvider = function ({ children }) {
  const [{ articles, isLoading, selectedArticle }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // LOADING ARTICLES
  useEffect(function () {
    async function fetchArticles() {
      dispatch({ type: "loading" });

      try {
        const data = await getDocs(collection(db, "Articles"));
        const articlesArray = [];
        data.forEach((doc) => {
          articlesArray.push({ id: doc.id, ...doc.data() });
        });
        dispatch({ type: "articles/loaded", payload: articlesArray });
      } catch {
        dispatch({ type: "rejected", payload: "Error loading data" });
      }
    }
    fetchArticles();
  }, []);

  // CREATING ARTICLE
  async function createArticle(article) {
    dispatch({ type: "loading" });
    await addDoc(collection(db, "Articles"), article);
    dispatch({ type: "articles/upload", payload: article });
  }

  // Showing Article Page
  function showArticle(selectedArticle) {
    dispatch({ type: "loading" });
    console.log(selectedArticle);
    dispatch({ type: "articles/show", payload: selectedArticle });
  }

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        isLoading,
        createArticle,
        selectedArticle,
        showArticle,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

function useArticles() {
  const context = useContext(ArticlesContext);
  if (context === undefined)
    throw new Error("ArticlesContext was used outside the ArticlesProvider");
  return context;
}

export { useArticles, ArticlesProvider };

/**
 [
    {
        "id": "HwSPT8XQIgyU1NQpOQki",
        "Content": "Adopting a zero-waste lifestyle might seem daunting, but with small, manageable steps, anyone can make significant progress. Here are seven practical tips to help you reduce waste and live more sustainably. Start by swapping single-use items for reusable alternatives. Replace plastic bags with cloth tote bags, disposable water bottles with stainless steel or glass bottles, and single-use coffee cups with reusable ones. These small changes can greatly reduce the amount of waste you produce daily. Another effective strategy is to buy in bulk. Purchasing items like grains, nuts, and spices in bulk not only saves money but also reduces packaging waste. Bring your own containers to the store to avoid using plastic bags and packaging. Composting is an excellent way to reduce food waste and create nutrient-rich soil for your garden. Instead of throwing away food scraps, start a compost pile or use a compost bin. This not only reduces the amount of waste sent to landfills but also provides natural fertilizer for plants. Be mindful of your purchases and avoid buying items with excessive packaging. Opt for products that use minimal or eco-friendly packaging. Additionally, consider buying second-hand items or repairing broken items instead of purchasing new ones. Reducing paper waste is also important. Switch to digital billing and subscriptions to cut down on paper usage. Use both sides of paper when printing, and recycle any paper that you do use. DIY cleaning products are another way to reduce waste and avoid harmful chemicals. Simple ingredients like vinegar, baking soda, and essential oils can be used to create effective, eco-friendly cleaning solutions. This not only reduces plastic waste from packaging but also ensures a healthier home environment. Finally, spreading awareness about the benefits of a zero-waste lifestyle can inspire others to make changes. Share your experiences, tips, and successes with friends and family. Encouraging a collective effort amplifies the positive impact on the environment. In conclusion, transitioning to a zero-waste lifestyle is achievable with small, deliberate changes. By incorporating these tips into your daily routine, you can reduce your waste, save money, and contribute to a healthier planet. Every effort counts, and together we can make a significant difference.",
        "Author": "Jane Eco",
        "Date": "June 15, 2024",
        "Image": "https://plus.unsplash.com/premium_photo-1664283229534-194c0cb5b7da?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Title": "7 Simple Tips for a Zero-Waste Lifestyle 🌍"
    },
    {
        "id": "Ivjlemr6gn4T6YphkJPA",
        "Author": "John Antwerp",
        "Content": "As our understanding of climate change grows, so does the urgency to reduce our carbon footprint. The good news is that making a positive impact doesn't require drastic changes. Here are ten simple steps you can take today to reduce your carbon footprint and contribute to a healthier planet. Switching to energy-efficient light bulbs is a straightforward and effective way to start. LED and CFL bulbs use significantly less energy and have a longer lifespan compared to traditional incandescent bulbs. This not only reduces your electricity bill but also lowers the amount of carbon dioxide emissions from power plants. Another simple habit to adopt is unplugging unused electronics. Many devices continue to consume energy even when they are turned off but remain plugged in. By unplugging them, you can save a considerable amount of energy over time, contributing to a reduction in overall energy consumption and carbon emissions. Opting for public transportation, biking, or walking instead of driving a car can make a significant difference. These alternatives reduce the number of vehicles on the road, which in turn lowers greenhouse gas emissions and decreases traffic congestion. If these options are not feasible, carpooling with friends or colleagues can also help reduce your carbon footprint. Practicing the three R's – reduce, reuse, and recycle – is another powerful way to minimize your environmental impact. By reducing waste, reusing items whenever possible, and recycling materials, you can help decrease the volume of trash that ends up in landfills, thereby reducing methane emissions and conserving natural resources. Conserving water is crucial, and it can be achieved through simple actions like taking shorter showers, fixing leaks, and using water-efficient appliances. These measures not only save water but also reduce the energy required to heat and pump it, leading to a lower carbon footprint. Incorporating more plant-based meals into your diet can significantly impact your carbon footprint. Animal agriculture is a major contributor to greenhouse gas emissions, and by choosing plant-based foods, you can help mitigate this effect. Even small changes, such as participating in \"Meatless Mondays,\" can make a difference. Supporting renewable energy is another effective strategy. If your utility provider offers a green energy plan, consider switching to it. Alternatively, installing solar panels on your home can reduce your reliance on fossil fuels and lower your carbon emissions. Sustainable shopping practices also play a vital role in reducing your carbon footprint. By buying locally-produced and sustainably-sourced products, you support local economies and reduce the carbon emissions associated with long-distance transportation of goods. Additionally, choosing products with minimal packaging can help reduce waste. Using a programmable thermostat is a smart way to optimize your home’s energy use. These thermostats allow you to set heating and cooling schedules that align with your daily routine, ensuring that energy is not wasted when you are not at home. This efficient temperature control can lead to significant energy savings and reduced carbon emissions. Lastly, spreading awareness about the importance of reducing carbon footprints can amplify your impact. Educating others and encouraging sustainable practices within your community fosters a collective effort towards a greener future. Sharing tips and success stories can inspire others to take action and adopt environmentally friendly habits. In conclusion, reducing your carbon footprint is not only beneficial for the planet but can also lead to cost savings and a healthier lifestyle. Start with these simple steps today and contribute to a more sustainable future for everyone. Small actions, when multiplied by millions, can transform the world.",
        "Title": "10 Easy Steps to Reduce Your Carbon Footprint Today🌲",
        "Image": "https://sushank49.github.io/ecoEmerge/images/articles/article1.jpg",
        "Date": "July 12, 2024"
    },
    {
        "id": "MtkpQyXyjlhjYkmVaLhG",
        "Title": "The Role of Technology in Sustainable Agriculture 🌾",
        "Content": "Sustainable agriculture is essential for feeding a growing global population while minimizing environmental impact. Technology plays a crucial role in advancing sustainable farming practices, increasing efficiency, and reducing resource use. Precision agriculture uses technology like GPS, sensors, and data analytics to optimize farming operations. By collecting data on soil moisture, nutrient levels, and crop health, farmers can make informed decisions about planting, irrigation, and fertilization. This targeted approach minimizes inputs, reduces waste, and improves yields. Vertical farming is another innovative solution that maximizes space and resources. In vertical farms, crops are grown in stacked layers under controlled conditions, using artificial lighting and hydroponic or aeroponic systems. This method requires less water and land than traditional farming and can be implemented in urban areas, reducing transportation emissions and food miles. Biotechnology plays a vital role in developing drought-resistant, pest-resistant, and high-yielding crop varieties. Genetically modified organisms (GMOs) and gene editing techniques allow scientists to enhance crop traits and improve resilience to climate change. These advancements help farmers adapt to changing environmental conditions and increase agricultural productivity. Agroforestry integrates trees and shrubs into agricultural landscapes, providing multiple benefits such as improved soil health, biodiversity conservation, and carbon sequestration. By combining crops with trees, farmers can diversify income streams, reduce erosion, and create habitats for beneficial insects and wildlife. Renewable energy technologies like solar panels and wind turbines can also be integrated into farming operations. Solar-powered irrigation systems, wind-powered water pumps, and biogas digesters are examples of renewable energy solutions that reduce reliance on fossil fuels and lower operating costs for farmers. In addition to these technological advancements, farmer education and knowledge sharing are essential for promoting sustainable agriculture practices. Training programs, workshops, and farmer networks facilitate the adoption of innovative techniques and promote collaboration among agricultural stakeholders. By harnessing the power of technology, sustainable agriculture can address the challenges of food security, climate change, and environmental degradation. By adopting innovative practices and embracing technological solutions, farmers can build resilient, productive, and environmentally sustainable food systems.",
        "Date": "September 20, 2024",
        "Author": "Emily Fields",
        "Image": "https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": "f2EGjPE3H7t4jA7mYCjJ",
        "Content": "Renewable energy sources offer a sustainable and environmentally friendly alternative to fossil fuels. From solar and wind power to hydroelectric and geothermal energy, harnessing nature's potential has become increasingly important in the fight against climate change. Solar energy is one of the most abundant and accessible renewable energy sources available. Solar panels, typically installed on rooftops or in solar farms, convert sunlight into electricity. This clean and renewable energy source reduces reliance on fossil fuels and produces no greenhouse gas emissions. Wind power is another renewable energy source with significant potential. Wind turbines capture the kinetic energy of the wind and convert it into electricity. Wind farms, located on land or offshore, can generate large amounts of clean energy, making wind power an essential component of the renewable energy transition. Hydroelectric power, generated from flowing water, has been used for centuries to produce electricity. Large dams and reservoirs are built to capture the energy of moving water and convert it into electrical energy. Hydroelectric power is reliable, cost-effective, and emits minimal greenhouse gases. Geothermal energy harnesses the heat stored beneath the Earth's surface to generate electricity. Geothermal power plants use steam or hot water from underground reservoirs to drive turbines and produce electricity. This renewable energy source is available 24/7 and has the potential to provide a significant portion of our energy needs. In addition to these renewable energy sources, there are emerging technologies like tidal and wave power that show promise in harnessing the energy of the ocean. As technology advances and investment in renewable energy grows, the transition to a clean energy future becomes increasingly feasible. Investing in renewable energy not only reduces our carbon footprint but also creates jobs, stimulates economic growth, and enhances energy security. By transitioning to renewable energy sources, we can mitigate the impacts of climate change and build a more sustainable and resilient future for generations to come.",
        "Author": "David Green",
        "Date": "August 5, 2024",
        "Title": "The Power of Renewable Energy: Harnessing Nature's Potential ⚡️",
        "Image": "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]
 */
