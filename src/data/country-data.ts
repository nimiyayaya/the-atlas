import { completeCountryDirectory } from "./country-directory";
import { countryOverviewData } from "../../public/reference images/atlas-country-overview-content";

export type Country = {
  slug: string;
  name: string;
  nativeName?: string;
  continent: string;
  heroImage: string;
  introduction: string;
  people: string;
  languages: string;
  culture: string;
  knownFor: string;
  bestTimeToGo: string;
  currency: string;
  currencyCode?: string;
  travelDocuments: string;
  generalTransport: string;
  safety: string;
  sources: string[];
  overviewItems?: { label: string; value: string }[];
};

const baseCountryCatalog: Country[] = [
  {
    slug: "kenya",
    name: "Kenya",
    nativeName: "Kenya",
    continent: "Africa",
    heroImage: "/images/countries/kenya.svg",
    introduction:
      "Kenya lies on the equator in East Africa, where rift-valley landscapes, savannahs, and coastlines sit alongside dense urban centres. It is one of the region's most visited countries for wildlife, mountain trekking, and long-distance travel corridors.",
    people:
      "Kenya's population is approximately 55 million people (2024 estimates), with major urban centres in Nairobi, Mombasa, and Kisumu. The country is ethnically and linguistically diverse, and Nairobi is the principal political and commercial hub.",
    languages:
      "Swahili and English are the official national languages. Many communities also speak one or more of Kenya's regional languages, including Kikuyu, Luo, Kalenjin, and Somali, depending on location.",
    culture:
      "National identity is shaped by a mix of Indigenous traditions, Christian and Muslim communities, and long-standing urban influences. Music, oral storytelling, dress, and agriculture remain central to regional culture.",
    knownFor:
      "Wildlife reserves, the Great Rift Valley, mountain trekking, national parks, and long-distance safari and conservation work.",
    bestTimeToGo:
      "The dry seasons from June to October and January to February are typically the most comfortable for wildlife viewing and road travel. Coastal areas are often more comfortable outside the heaviest rainy periods.",
    currency: "Kenyan shilling (KES).",
    currencyCode: "KES",
    travelDocuments:
      "Entry requirements vary by nationality and current immigration rules. A valid passport is generally required, and travelers should confirm visa or entry conditions before departure.",
    generalTransport:
      "Roads connect the main cities and safari routes, while domestic flights serve national parks and remote destinations. Rail is limited compared with road and air connectivity.",
    safety:
      "Kenya is generally navigable for visitors who follow standard precautions, but road safety, wildlife encounters, and petty crime vary by area and time. Travelers are advised to check current local conditions and official guidance.",
    sources: ["Kenya National Bureau of Statistics", "World Bank", "UN data"],
  },
  {
    slug: "morocco",
    name: "Morocco",
    nativeName: "المغرب",
    continent: "Africa",
    heroImage: "/images/countries/morocco.svg",
    introduction:
      "Morocco spans northwestern Africa and includes Atlantic coastlines, mountain ranges, and a Mediterranean edge. Its geography supports a mix of Atlantic, desert, and highland regions with a long history of trade and migration.",
    people:
      "Morocco has a population of roughly 38 million people (2024 estimates), with the largest urban centers in Casablanca, Rabat, Marrakech, and Fes.",
    languages:
      "Arabic is the official language. Modern Standard Arabic and Moroccan Arabic are widely used, while French remains important in administration, business, and education. Berber languages are also recognized in some contexts.",
    culture:
      "Moroccan culture reflects Arab, Berber, African, and Mediterranean influences. Craft traditions, architecture, music, and food culture remain central to social life and identity.",
    knownFor:
      "Medinas, desert travel, mountain landscapes, Islamic and Andalusian architecture, and artisanal crafts.",
    bestTimeToGo:
      "Spring and autumn are usually the most comfortable periods for travel across much of the country, while desert regions can be very hot in summer and cooler in winter.",
    currency: "Moroccan dirham (MAD).",
    currencyCode: "MAD",
    travelDocuments:
      "A valid passport is generally required for entry, and visa requirements depend on nationality and current immigration policy.",
    generalTransport:
      "Train links connect major cities, while buses and shared taxis serve smaller routes. Domestic flights support longer routes, and intercity road travel is common.",
    safety:
      "Morocco is generally considered manageable for visitors with standard precautions. Travelers should remain alert in busy transit areas, understand local road conditions, and follow official guidance in remote regions.",
    sources: ["World Bank", "Morocco Ministry of Tourism", "UN data"],
  },
  {
    slug: "south-africa",
    name: "South Africa",
    nativeName: "South Africa",
    continent: "Africa",
    heroImage: "/images/countries/south-africa.svg",
    introduction:
      "South Africa occupies the southern tip of Africa and combines coastal cities, mountain ranges, semi-arid interior, and a highly varied topography. It is a country of strong regional contrasts and complex historical layers.",
    people:
      "South Africa has a population of around 60 million people (2024 estimates), with major population centres in Gauteng, KwaZulu-Natal, and the Western Cape.",
    languages:
      "South Africa has 11 official languages, including Zulu, Xhosa, Afrikaans, English, and several others. The language mix varies by province and community.",
    culture:
      "South African culture is shaped by Indigenous communities, colonial history, migration, and contemporary urban life. Arts, music, food, and regional traditions are all highly visible.",
    knownFor:
      "Cape Town, Kruger National Park, coastal scenery, wine regions, mining heritage, and diverse landscapes.",
    bestTimeToGo:
      "May to September is often a comfortable time for much of the country, while summer months bring heat and rainfall in some regions. Coastal and inland weather can differ significantly.",
    currency: "South African rand (ZAR).",
    currencyCode: "ZAR",
    travelDocuments:
      "Entry requirements depend on nationality and immigration rules. Travelers generally need a valid passport and should confirm current visa or entry conditions before travel.",
    generalTransport:
      "Long-distance road travel and domestic flights are important, while regional trains and bus services support intercity movement. Car hire is often useful for flexible travel.",
    safety:
      "Travel conditions vary by city and region. Visitors should be mindful of vehicle security, accommodation safety, and local guidance, particularly in urban areas and on long road journeys.",
    sources: ["Statistics South Africa", "World Bank", "Department of Home Affairs"],
  },
  {
    slug: "egypt",
    name: "Egypt",
    nativeName: "مصر",
    continent: "Africa",
    heroImage: "/images/countries/egypt.svg",
    introduction:
      "Egypt sits at the northeast corner of Africa and is defined by the Nile Valley, desert landscapes, and a long Mediterranean and Red Sea coastline. It is one of the world's earliest centres of urban civilization and remains central to regional trade and transport.",
    people:
      "Egypt has a population of roughly 112 million people (2024 estimates), concentrated along the Nile and in the major cities of Cairo and Alexandria.",
    languages:
      "Arabic is the official language. Egyptian Arabic is the dominant spoken form, and English and French are widely used in tourism and business.",
    culture:
      "Egyptian culture is deeply shaped by ancient history, Islamic heritage, and modern urban life. Architecture, literature, religious practice, and public life remain closely tied to the Nile and the long arc of historical change.",
    knownFor:
      "Ancient monuments, pyramids, the Nile, desert landscapes, and historic cities.",
    bestTimeToGo:
      "Late autumn to early spring is generally more comfortable for travel. Summer in the north and Nile Valley can be intensely hot, and desert regions are often extremely dry.",
    currency: "Egyptian pound (EGP).",
    currencyCode: "EGP",
    travelDocuments:
      "A passport is generally required for entry, and visa rules depend on nationality, travel purpose, and current regulations.",
    generalTransport:
      "Domestic rail, buses, and long-distance road services connect key cities, while domestic flights are common for long routes. Cairo and Alexandria are primary transit hubs.",
    safety:
      "Egypt is widely traveled and generally manageable for visitors who follow local advice and standard travel precautions. Security conditions can shift in some border and desert areas, so current guidance matters.",
    sources: ["CAPMAS", "World Bank", "Egyptian Tourism Authority"],
  },
  {
    slug: "ethiopia",
    name: "Ethiopia",
    nativeName: "ኢትዮጵያ",
    continent: "Africa",
    heroImage: "/images/countries/ethiopia.svg",
    introduction:
      "Ethiopia is a highland country in the Horn of Africa, with a varied topography that ranges from mountains and rift valleys to savannah and lowland regions. It holds some of the oldest historical and cultural continuities in the region.",
    people:
      "Ethiopia has a population of around 126 million people (2024 estimates), making it one of the continent's most populous countries.",
    languages:
      "Amharic is the federal working language, while Ethiopia has many additional regional languages and language groups, including Oromo, Somali, Tigrinya, and others depending on region.",
    culture:
      "Ethiopian culture is shaped by ancient Christian traditions, Indigenous belief systems, regional customs, and a rich literary heritage. Festivals, food, and language remain important markers of community identity.",
    knownFor:
      "Highland landscapes, the Rift Valley, coffee-growing regions, ancient churches, and diverse languages and cultural traditions.",
    bestTimeToGo:
      "The cooler months from October to March are often more comfortable for travel in highland areas. Weather varies substantially by altitude and season.",
    currency: "Ethiopian birr (ETB).",
    currencyCode: "ETB",
    travelDocuments:
      "Entry requirements depend on nationality and immigration rules. A valid passport is generally required, with visa conditions varying by traveler and route.",
    generalTransport:
      "Roads and domestic flights are the main connectors for travel between regions, while internal bus services link many towns. Rail remains limited relative to road transport.",
    safety:
      "Travel conditions are generally manageable but can vary significantly by region. Road conditions, altitude, and local security situations require attention, especially outside major urban centres.",
    sources: ["Ethiopian Central Statistical Agency", "World Bank", "UN data"],
  },
  {
    slug: "ghana",
    name: "Ghana",
    nativeName: "Ghana",
    continent: "Africa",
    heroImage: "/images/countries/ghana.svg",
    introduction:
      "Ghana lies on the Gulf of Guinea in West Africa and is bordered by Côte d'Ivoire, Burkina Faso, and Togo. It is a country of Atlantic coastlines, forested regions, and a central plateau.",
    people:
      "Ghana has a population of about 35 million people (2024 estimates), with major urban centres in Accra, Kumasi, and Takoradi.",
    languages:
      "English is the official language. Ghana also has many widely spoken Ghanaian languages, including Akan, Ewe, Ga, and others, with regional variation across the country.",
    culture:
      "Ghanaian culture is rooted in Indigenous traditions, colonial history, and a strong contemporary arts and music scene. Festivals, storytelling, and community-based social institutions remain important.",
    knownFor:
      "Coastal towns, gold mining history, music, ecotourism, and the Volta Basin region.",
    bestTimeToGo:
      "The dry season from November to March is often the most comfortable for travel, while the rainy season can affect road access and outdoor activities in some areas.",
    currency: "Ghanaian cedi (GHS).",
    currencyCode: "GHS",
    travelDocuments:
      "A valid passport is generally required for travel, and visa requirements depend on nationality and current border regulations.",
    generalTransport:
      "Road transport is the most important form of intercity travel, while domestic flights and coach services connect major destinations. Public transport is significant in urban areas.",
    safety:
      "Ghana is generally considered one of the more stable destinations in West Africa, though travelers should still keep to standard urban precautions and check local travel advice.",
    sources: ["Ghana Statistical Service", "World Bank", "Ghana Tourism Authority"],
  },
  {
    slug: "tanzania",
    name: "Tanzania",
    nativeName: "Tanzania",
    continent: "Africa",
    heroImage: "/images/countries/tanzania.svg",
    introduction:
      "Tanzania occupies East Africa and includes mainland territory and the island archipelago of Zanzibar. It is known for wildlife-rich national parks, mountain environments, and a long coastline.",
    people:
      "Tanzania has a population of about 63 million people (2024 estimates), with major urban centres in Dar es Salaam, Dodoma, and Arusha.",
    languages:
      "Swahili and English are the official national languages. Many regional languages are also spoken, especially in local communities and rural areas.",
    culture:
      "Tanzanian culture reflects Indigenous traditions, Islamic communities, East African trade histories, and a strong pastoral and agricultural heritage. Music and dance are culturally significant across the country.",
    knownFor:
      "National parks, mountain trekking, island destinations, coastal tourism, and wildlife conservation.",
    bestTimeToGo:
      "June to October is often the dry season for safari travel, while the coastal areas can be more comfortable outside the heaviest rainy months. Conditions vary by region and altitude.",
    currency: "Tanzanian shilling (TZS).",
    currencyCode: "TZS",
    travelDocuments:
      "A valid passport is generally required, and entry conditions depend on nationality and current immigration regulations.",
    generalTransport:
      "Domestic flights, buses, and road travel are the main forms of intercity transport. Rail remains more limited, while ferries connect island destinations and coastal routes.",
    safety:
      "Tanzania is widely visited and generally manageable with standard precautions, though road safety, wildlife areas, and remote travel conditions need attention. Local guidance is important.",
    sources: ["Tanzania National Bureau of Statistics", "World Bank", "UN data"],
  },
  {
    slug: "japan",
    name: "Japan",
    nativeName: "日本",
    continent: "Asia",
    heroImage: "/images/Asia/Japan Card.jpeg",
    introduction:
      "Japan is an island country in East Asia made up of thousands of islands, with urban centres, mountainous regions, and a highly developed transport network. It combines dense metropolitan life with long historic traditions.",
    people:
      "Japan's population is predominantly Japanese, with Ainu communities in Hokkaido and Ryukyuan communities across Okinawa and the Amami Islands. Korean, Chinese, and other long-established and newer communities also form part of the country's social fabric.",
    languages:
      "Japanese is the main language spoken across the country. Ainu is an Indigenous language of Hokkaido, while Ryukyuan languages, including Okinawan, have deep roots in the Ryukyu Islands; English is widely taught and used in many tourist and international settings.",
    culture:
      "Japanese culture is shaped by long-standing traditions in arts, ritual practice, food, literature, and urban design. It also reflects regional diversity and contemporary global influences.",
    knownFor:
      "Mountains, technology, urban design, temple architecture, cuisine, and a highly efficient public transport system.",
    bestTimeToGo:
      "Spring and autumn are often the pleasantest periods for travel, with mild weather and strong seasonal scenery. Summer can be hot and humid in many parts of the country, while winter varies by region.",
    currency: "Japanese yen (JPY).",
    currencyCode: "JPY",
    travelDocuments:
      "Entry requirements depend on nationality and current immigration rules. Travelers generally need a valid passport and may need a visa depending on their country of citizenship and purpose of travel.",
    generalTransport:
      "Japan is well served by rail, subways, buses, and domestic flights. Urban transit is highly developed, and intercity rail is a major mode of travel.",
    safety:
      "Japan is widely regarded as one of the most orderly and low-risk destinations for travelers, though standard precautions around personal safety, transit etiquette, and natural hazards remain important.",
    sources: ["Japan Statistics Bureau", "UN data", "Japan National Tourism Organization"],
  },
  {
    slug: "india",
    name: "India",
    nativeName: "भारत",
    continent: "Asia",
    heroImage: "/images/Asia/India Card.jpeg",
    introduction:
      "India is a vast South Asian country with a range of climates, geographies, and linguistic traditions. It spans deserts, mountains, tropical coastlines, and dense urban centres with a long and varied historical record.",
    people:
      "India has a population of more than 1.4 billion people (2024 estimates), making it the world's most populous country. Large urban centres include Delhi, Mumbai, Bengaluru, and Kolkata.",
    languages:
      "Hindi and English are the most widely used official languages for national administration, while the country has many constitutionally recognized regional languages and hundreds of local languages in daily use.",
    culture:
      "India's cultural landscape is highly diverse, shaped by multiple linguistic communities, faith traditions, artistic practices, and regional cuisines. This diversity is central to the country's social and cultural identity.",
    knownFor:
      "Ancient heritage sites, mountain regions, desert landscapes, textiles, cuisine, film, music, and religious and architectural history.",
    bestTimeToGo:
      "The cooler months from October to March are typically more comfortable in much of the country. Weather varies considerably by region, and the monsoon season affects travel in many areas.",
    currency: "Indian rupee (INR).",
    currencyCode: "INR",
    travelDocuments:
      "Travel requirements vary with citizenship and current immigration rules. A valid passport is required, and visa requirements depend on nationality and purpose of visit.",
    generalTransport:
      "India has extensive long-distance rail, intercity buses, domestic flights, and road networks. Urban travel often relies on metro systems, buses, auto-rickshaws, and taxis.",
    safety:
      "India is widely traveled and generally navigable for visitors who follow local advice and standard precautions. Conditions vary by region, and travelers should be mindful of transport safety, air quality, and local crowding in busy areas.",
    sources: ["Government of India", "World Bank", "UN data"],
  },
  {
    slug: "china",
    name: "China",
    nativeName: "中国",
    continent: "Asia",
    heroImage: "/images/Asia/China Card.jpeg",
    introduction:
      "China occupies a large part of East Asia and includes a range of climatic zones, mountain systems, river basins, and highly urbanized regions. It is one of the world's largest countries by both population and physical area.",
    people:
      "China has a population of around 1.4 billion people (2024 estimates), with major urban centres such as Beijing, Shanghai, Shenzhen, and Chengdu.",
    languages:
      "Mandarin Chinese is the official national language. Many other languages and dialect groups are spoken widely, especially across different regions and communities.",
    culture:
      "Chinese culture is shaped by a long historical record, regional diversity, philosophical traditions, and major artistic and literary traditions. Food, language, local customs, and architecture remain central to daily life.",
    knownFor:
      "High mountains, river systems, ancient urban centres, major architecture, science and engineering, and long cultural continuity.",
    bestTimeToGo:
      "The best season depends strongly on the region. Spring and autumn are often comfortable in many areas, while winter can be very cold in the north and summer very hot and wet in parts of the south and east.",
    currency: "Renminbi (CNY).",
    currencyCode: "CNY",
    travelDocuments:
      "Entry requirements vary by nationality and current immigration policy. Travelers generally need a valid passport and may require a visa depending on citizenship and travel purpose.",
    generalTransport:
      "China has highly developed high-speed rail, air connections, and an extensive road and urban transit system. Regional variation is substantial, but transport is widely available between major cities.",
    safety:
      "China is generally well organized for travelers, though the experience varies with region, local regulations, and travel conditions. Standard urban precautions and awareness of local rules remain important.",
    sources: ["National Bureau of Statistics of China", "World Bank", "UN data"],
  },
  {
    slug: "thailand",
    name: "Thailand",
    nativeName: "ประเทศไทย",
    continent: "Asia",
    heroImage: "/images/Asia/Thailand Card.jpeg",
    introduction:
      "Thailand is a Southeast Asian country known for tropical coastlines, mountain ranges, rice-growing plains, and a highly developed tourism sector. It sits at the crossroads of mainland Southeast Asia and maritime routes.",
    people:
      "Thailand has a population of about 71 million people (2024 estimates), with Bangkok and surrounding urban areas accounting for a very large share of the population.",
    languages:
      "Thai is the official language. English is commonly used in tourism and major urban centres, while other regional languages are also spoken across the country.",
    culture:
      "Thai culture blends Buddhist traditions, regional customs, royal heritage, and strong urban and rural links. Food, temple culture, and social etiquette are central features of daily life.",
    knownFor:
      "Islands, temple architecture, tropical landscapes, cuisine, and long-distance tourism circuits.",
    bestTimeToGo:
      "The cool and dry season from November to February is usually comfortable for travel in much of the country, while the monsoon season affects some regions and coastal conditions.",
    currency: "Thai baht (THB).",
    currencyCode: "THB",
    travelDocuments:
      "Travel rules depend on nationality, current immigration policy, and the purpose of the visit. A valid passport is generally required and visas may be needed.",
    generalTransport:
      "Domestic flights, rail, buses, and long-tail boats or ferries are the main transport modes. Bangkok is the key transport hub for both domestic and international travel.",
    safety:
      "Thailand is widely visited and generally manageable with normal precautions. Travelers should stay alert to road conditions, weather, and local standards for personal security in tourist areas.",
    sources: ["National Statistical Office of Thailand", "World Bank", "Tourism Authority of Thailand"],
  },
  {
    slug: "indonesia",
    name: "Indonesia",
    nativeName: "Indonesia",
    continent: "Asia",
    heroImage: "/images/Asia/Indonesia Card.jpeg",
    introduction:
      "Indonesia is the world's largest archipelagic country, stretching across the equator and spanning hundreds of islands. It includes volcanic highlands, rainforest regions, coral seas, and densely populated urban centres.",
    people:
      "Indonesia has a population of roughly 280 million people (2024 estimates), with major centres including Jakarta, Surabaya, Bandung, and Bali.",
    languages:
      "Bahasa Indonesia is the official national language. Thousands of local languages and dialects are spoken widely across the archipelago, with many communities retaining distinct linguistic traditions.",
    culture:
      "Indonesian culture is highly diverse, shaped by local traditions, Hindu-Buddhist history, Islamic communities, colonial influence, and contemporary urban life. Regional identities remain prominent.",
    knownFor:
      "Volcanoes, tropical islands, biodiversity, marine areas, rice terraces, and varied cultural traditions.",
    bestTimeToGo:
      "The dry season from April to October is often the best time for many regions, though weather and monsoon patterns vary across islands and elevations.",
    currency: "Indonesian rupiah (IDR).",
    currencyCode: "IDR",
    travelDocuments:
      "A valid passport is generally required, and visa requirements depend on nationality, immigration rules, and purpose of stay.",
    generalTransport:
      "Domestic flights, ferries, buses, and railways are all important in different parts of the country. Island travel often depends on sea or air connections.",
    safety:
      "Indonesia is widely traveled, but conditions vary by island and region. Travelers should consider weather, transport reliability, and local safety advice, especially in remote or mountainous areas.",
    sources: ["BPS Statistics Indonesia", "World Bank", "UN data"],
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    nativeName: "Việt Nam",
    continent: "Asia",
    heroImage: "/images/Asia/Vietnam Card.jpeg",
    introduction:
      "Vietnam stretches along the eastern edge of mainland Southeast Asia and includes mountain regions, river deltas, coastal plains, and a long coastline. It has a strong historical continuity and a varied landscape.",
    people:
      "Vietnam has a population of about 100 million people (2024 estimates), with major urban centres in Hanoi, Ho Chi Minh City, Da Nang, and Hai Phong.",
    languages:
      "Vietnamese is the official language. Many regional languages and minority languages are also spoken, especially in upland and border regions.",
    culture:
      "Vietnamese culture is shaped by Confucian, Buddhist, and local traditions, as well as more recent national and urban influences. Food, family, and regional customs remain highly visible.",
    knownFor:
      "Rice landscapes, historical cities, war heritage, mountain scenery, and a strong culinary culture.",
    bestTimeToGo:
      "The dry season from November to April is often the most comfortable for travel in central and northern regions, while the south is typically drier from December to April.",
    currency: "Vietnamese đồng (VND).",
    currencyCode: "VND",
    travelDocuments:
      "A valid passport is generally required, and visa conditions depend on nationality, the purpose of visit, and current immigration requirements.",
    generalTransport:
      "Rail, buses, domestic flights, and motorbike travel are all common, with intercity transport varying by region and the distance involved.",
    safety:
      "Vietnam is generally manageable for visitors with standard precautions. Road safety, motorbike traffic, and weather conditions are important considerations, especially outside major cities.",
    sources: ["General Statistics Office of Vietnam", "World Bank", "UN data"],
  },
  {
    slug: "south-korea",
    name: "South Korea",
    nativeName: "대한민국",
    continent: "Asia",
    heroImage: "/images/Asia/South Korea Card.jpeg",
    introduction:
      "South Korea occupies the southern half of the Korean Peninsula and is defined by mountain ranges, river basins, coastal plains, and highly developed urban regions. It is one of the most urbanized and technologically advanced countries in East Asia.",
    people:
      "South Korea has a population of about 52 million people (2024 estimates), concentrated in Seoul, Incheon, Busan, and other major metropolitan areas.",
    languages:
      "Korean is the official language. English is widely used in major cities and tourist areas, though proficiency varies by setting and age group.",
    culture:
      "South Korean culture combines modern urban life with strong historical frameworks in art, cuisine, family structure, and language traditions. Media, fashion, and technology have also shaped contemporary identity.",
    knownFor:
      "Dynamic cities, mountains, cuisine, design, technology, and a long historical and artistic tradition.",
    bestTimeToGo:
      "Spring and autumn are typically the most comfortable periods for travel, with moderate temperatures and clear conditions. Summer can be hot and humid, and winter is cold in inland areas.",
    currency: "South Korean won (KRW).",
    currencyCode: "KRW",
    travelDocuments:
      "Entry requirements vary by nationality and current immigration regulations. Travelers usually need a valid passport and may need a visa depending on citizenship and purpose of stay.",
    generalTransport:
      "South Korea has highly efficient rail, buses, subways, and domestic flight networks. Public transport is reliable and central to everyday movement in urban centres.",
    safety:
      "South Korea is generally regarded as a low-risk destination for travelers, though weather extremes, hiking conditions, and urban congestion should still be considered.",
    sources: ["Statistics Korea", "World Bank", "Korean Tourism Organization"],
  },
  {
    slug: "france",
    name: "France",
    nativeName: "France",
    continent: "Europe",
    heroImage: "/images/countries/france.svg",
    introduction:
      "France is a western European country with a strong Atlantic and Mediterranean influence, diverse regional identities, and dense urban networks. It combines long historical continuity with contemporary administrative and cultural life.",
    people:
      "France has a population of roughly 68 million people (2024 estimates), with major urban concentration in Paris, Lyon, Marseille, and Toulouse.",
    languages:
      "French is the official language. Regional languages and minority languages continue to be spoken in several areas, and English is widely used in tourist centres and international contexts.",
    culture:
      "French culture is shaped by literature, food, cinema, architecture, and a strong regional identity. The country is also marked by historical institutions and diverse urban communities.",
    knownFor:
      "Historic cities, museums, wine regions, architecture, cuisine, and a significant role in European politics and culture.",
    bestTimeToGo:
      "Spring and autumn are often the most comfortable seasons for many regions, while summer can be warm and busier in cities and coastal areas. Regional climates vary substantially.",
    currency: "Euro (EUR).",
    currencyCode: "EUR",
    travelDocuments:
      "Entry requirements depend on nationality and current immigration rules. A valid passport is generally required, and visa conditions vary accordingly.",
    generalTransport:
      "France has extensive rail, bus, and domestic air links. Major cities are well served by transit systems, and road travel is important for regional movement.",
    safety:
      "France is widely traveled and generally manageable for visitors who take standard precautions. Urban awareness, transport safety, and local conditions remain important, especially in large cities.",
    sources: ["INSEE", "World Bank", "France Tourism"],
  },
  {
    slug: "italy",
    name: "Italy",
    nativeName: "Italia",
    continent: "Europe",
    heroImage: "/images/countries/italy.svg",
    introduction:
      "Italy stretches across the Mediterranean and includes mountains, coastlines, fertile plains, and a cluster of highly distinctive regional cultures. It is one of the most visited countries in Europe and a major centre of historical and artistic heritage.",
    people:
      "Italy has a population of around 58 million people (2024 estimates), with major centres in Rome, Milan, Naples, and Turin.",
    languages:
      "Italian is the official language. Regional languages and dialects remain in use, and English is common in major tourist centres and international business contexts.",
    culture:
      "Italian culture is strongly shaped by regional identities, cuisine, art, Renaissance heritage, and urban life. Traditional local customs remain a core part of everyday life in many areas.",
    knownFor:
      "Historic cities, art, coastal destinations, food, architecture, and a wide range of regional landscapes.",
    bestTimeToGo:
      "Spring and early autumn are often the most comfortable periods for many regions. Summer is popular in the coast and mountains, and winter can be cold in the north.",
    currency: "Euro (EUR).",
    currencyCode: "EUR",
    travelDocuments:
      "A valid passport is generally required for entry, with visa requirements depending on nationality and current regulations.",
    generalTransport:
      "Italy has strong rail connections, bus networks, ferries, and domestic air services. Public transport is highly developed in major cities and between key regions.",
    safety:
      "Italy is generally manageable for visitors with standard urban precautions. Petty theft, crowded transit areas, and road conditions require awareness, especially in major tourist centres.",
    sources: ["ISTAT", "World Bank", "Italian Tourism Ministry"],
  },
  {
    slug: "spain",
    name: "Spain",
    nativeName: "España",
    continent: "Europe",
    heroImage: "/images/countries/spain.svg",
    introduction:
      "Spain occupies the Iberian Peninsula and includes Atlantic and Mediterranean coasts, mountainous regions, and major urban centres. It has a long history of regional identities and a highly varied geography.",
    people:
      "Spain has a population of about 49 million people (2024 estimates), with major population centres in Madrid, Barcelona, Valencia, and Seville.",
    languages:
      "Spanish is the official language. Regional languages such as Catalan, Galician, and Basque are also recognized and widely used in their respective regions.",
    culture:
      "Spanish culture is defined by regional traditions, historical continuity, religious heritage, architecture, and a strong artistic and culinary culture. It is highly diverse across the country.",
    knownFor:
      "Historic cities, coastlines, architecture, art, food, and a wide mix of Mediterranean and Atlantic landscapes.",
    bestTimeToGo:
      "Spring and autumn usually offer the most comfortable conditions for travel outside the hottest months. Summer is popular in many coastal regions, while mountain areas differ significantly.",
    currency: "Euro (EUR).",
    currencyCode: "EUR",
    travelDocuments:
      "Entry requirements depend on nationality and current immigration rules. Travelers generally need a valid passport and may require a visa depending on their country of citizenship.",
    generalTransport:
      "Spain has extensive rail, bus, and air links. Domestic transport is reliable, and public transit in cities is well developed for daily movement.",
    safety:
      "Spain is generally a straightforward destination for travelers who take normal precautions. Pickpocketing, urban crowding, and road conditions need attention, as in many large European cities.",
    sources: ["INE", "World Bank", "Spanish Tourism Board"],
  },
  {
    slug: "greece",
    name: "Greece",
    nativeName: "Ελλάδα",
    continent: "Europe",
    heroImage: "/images/countries/greece.svg",
    introduction:
      "Greece occupies the southern Balkans and includes the mainland and thousands of islands in the Aegean and Ionian seas. It is defined by coastal geography, mountain regions, and deep historical continuity.",
    people:
      "Greece has a population of around 10 million people (2024 estimates), with Athens and Thessaloniki as the main urban centres.",
    languages:
      "Greek is the official language. English is commonly used in tourist areas and major cities, while regional dialects and minority languages remain in use in some places.",
    culture:
      "Greek culture combines ancient traditions with modern urban life, strong regional identities, and a long maritime history. Food, religion, and island communities remain central to cultural expression.",
    knownFor:
      "Ancient ruins, islands, archaeological sites, Mediterranean coastlines, and long maritime traditions.",
    bestTimeToGo:
      "Late spring to early summer and early autumn are often the most comfortable periods for travel. Summer is hot and busy in many coastal areas, while the mainland can be cooler in mountain regions.",
    currency: "Euro (EUR).",
    currencyCode: "EUR",
    travelDocuments:
      "A valid passport is generally required, and visa conditions depend on nationality and current immigration rules.",
    generalTransport:
      "Ferries and domestic flights are important for island travel, alongside bus and rail links. Greece is highly dependent on coastal and road transport in many regions.",
    safety:
      "Greece is generally a manageable destination for travelers with standard precautions. Coastal weather, summer crowding, and road safety can vary significantly by region.",
    sources: ["ELSTAT", "World Bank", "Greek Tourism Organization"],
  },
  {
    slug: "portugal",
    name: "Portugal",
    nativeName: "Portugal",
    continent: "Europe",
    heroImage: "/images/countries/portugal.svg",
    introduction:
      "Portugal is on the Iberian Peninsula's Atlantic edge and includes a long coastline, farming regions, mountain interiors, and a major maritime history. It is one of the more compact countries in Europe but with very varied geography.",
    people:
      "Portugal has a population of roughly 10 million people (2024 estimates), with most urban populations concentrated around Lisbon, Porto, and the Algarve.",
    languages:
      "Portuguese is the official language. Regional dialects and minority languages exist in some areas, while English is common in tourism and major urban centres.",
    culture:
      "Portuguese culture reflects Atlantic trade, colonial history, fishing traditions, and regional inland and coastal identities. Food, music, and local festivals remain important markers of cultural life.",
    knownFor:
      "Coasts, Atlantic landscapes, historic cities, wine, tiled architecture, and maritime heritage.",
    bestTimeToGo:
      "Spring and autumn often bring the most comfortable travel conditions. Summer can be hot in the interior and busy on the coast, while winters are mild by many European standards.",
    currency: "Euro (EUR).",
    currencyCode: "EUR",
    travelDocuments:
      "Entry requirements depend on nationality and current immigration rules. A valid passport is generally required, and visas may be needed for some travelers.",
    generalTransport:
      "Portugal has rail, bus, domestic flight, and ferry services. The country is well connected for internal movement, especially between major cities and coastal regions.",
    safety:
      "Portugal is generally a straightforward destination for visitors with standard precautions. Travelers should still consider road safety, urban crime awareness, and coastal weather conditions.",
    sources: ["INE Portugal", "World Bank", "Tourism of Portugal"],
  },
  {
    slug: "germany",
    name: "Germany",
    nativeName: "Deutschland",
    continent: "Europe",
    heroImage: "/images/countries/germany.svg",
    introduction:
      "Germany sits in central Europe and is defined by a strong mix of dense urban centres, river valleys, forested uplands, and industrial landscapes. Its geography and infrastructure make it one of the key transport hubs of Europe.",
    people:
      "Germany has a population of about 84 million people (2024 estimates), with major population centres in Berlin, Hamburg, Munich, and Cologne.",
    languages:
      "German is the official language. Regional languages and dialects remain in use, and English is widely understood in major cities and international contexts.",
    culture:
      "German culture is shaped by regional traditions, a long intellectual history, manufacturing and engineering, and strong arts and music traditions. The country is also highly urban and diverse.",
    knownFor:
      "Cities, transport infrastructure, historical architecture, museums, engineering, and a broad range of cultural institutions.",
    bestTimeToGo:
      "Late spring, early summer, and early autumn are generally the most comfortable periods. Winter is cold in many areas, especially in the north and east, while summers can be warm and busy.",
    currency: "Euro (EUR).",
    currencyCode: "EUR",
    travelDocuments:
      "Entry requirements depend on nationality and current immigration rules. A valid passport is generally required, and visas may be needed depending on citizenship and purpose of entry.",
    generalTransport:
      "Germany has a highly developed rail network, extensive bus routes, domestic flights, and strong urban transit systems. It is one of Europe's easiest countries to move through by public transport.",
    safety:
      "Germany is generally considered a low-risk destination for travelers, though standard city precautions and awareness of road and rail conditions remain important.",
    sources: ["Destatis", "World Bank", "Germany Tourism"],
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    nativeName: "Schweiz",
    continent: "Europe",
    heroImage: "/images/countries/switzerland.svg",
    introduction:
      "Switzerland sits in central Europe and is defined by alpine terrain, lakes, and highly developed urban regions. It has strong regional languages and a dense transport network that links major settlements and mountainous areas.",
    people:
      "Switzerland has a population of around 8.9 million people (2024 estimates), with large urban centres in Zurich, Geneva, Basel, and Bern.",
    languages:
      "German, French, Italian, and Romansh are all national languages, with the dominant language varying by canton. English is widely used in international and tourist contexts.",
    culture:
      "Swiss culture is highly regional and multilingual, shaped by alpine geography, civic traditions, and a strong emphasis on neutrality, design, and public infrastructure.",
    knownFor:
      "Alpine landscapes, lakes, precision manufacturing, rail transport, mountain tourism, and multilingual civic culture.",
    bestTimeToGo:
      "Late spring to early autumn is generally ideal for mountain and lake travel. Winter is suitable for alpine activities, but conditions vary by altitude and region.",
    currency: "Swiss franc (CHF).",
    currencyCode: "CHF",
    travelDocuments:
      "Entry requirements depend on nationality and current immigration rules, and a valid passport is generally required for entry. Visa conditions vary by citizenship.",
    generalTransport:
      "Switzerland is especially notable for rail and public transport connectivity. Buses, mountain railways, and domestic flights all support movement across urban and alpine landscapes.",
    safety:
      "Switzerland is generally considered a low-risk destination for travelers. Weather, mountain conditions, and careful planning for alpine travel remain important.",
    sources: ["Federal Statistical Office", "World Bank", "Swiss Tourism"],
  },
  {
    slug: "united-states",
    name: "United States",
    nativeName: "United States",
    continent: "North America",
    heroImage: "/images/countries/united-states.svg",
    introduction:
      "The United States occupies a large portion of North America and spans a wide range of climates, ecological systems, and urban regions. It is defined by continental scale, coastal edges, and a highly diverse geography.",
    people:
      "The United States has a population of roughly 340 million people (2024 estimates), with major populations concentrated in cities such as New York, Los Angeles, Chicago, and Houston.",
    languages:
      "English is the de facto national language, and Spanish is widely spoken. The country does not have an official national language at the federal level, and hundreds of languages are spoken by communities across the country.",
    culture:
      "American culture is highly diverse and shaped by migration, regional traditions, Indigenous histories, and contemporary media. It is expressed through urban life, community traditions, food, and a wide range of cultural institutions.",
    knownFor:
      "Large cities, national parks, mountain ranges, coastal geographies, science and technology, and a highly diverse cultural landscape.",
    bestTimeToGo:
      "The best season varies by region. Spring and autumn are often comfortable in many parts of the country, while summers are hot in interior and southern regions and winters are cold in the north.",
    currency: "United States dollar (USD).",
    currencyCode: "USD",
    travelDocuments:
      "Entry requirements depend on nationality and current entry rules. A valid passport is generally required for international travelers, and visa or ESTA conditions vary by nationality.",
    generalTransport:
      "The United States relies heavily on domestic air travel, long-distance road networks, rail services, and urban public transit. Car travel is often important outside major metropolitan areas.",
    safety:
      "The U.S. is a major destination with a broad range of travel conditions. Travelers should be attentive to local guidance, urban safety, and regional weather or transport issues.",
    sources: ["U.S. Census Bureau", "World Bank", "U.S. Department of State"],
  },
  {
    slug: "canada",
    name: "Canada",
    nativeName: "Canada",
    continent: "North America",
    heroImage: "/images/countries/canada.svg",
    introduction:
      "Canada is a northern North American country with a highly varied geography, including mountains, forests, plains, Arctic regions, and major lakes. It is known for its scale, relatively low density, and strong regional diversity.",
    people:
      "Canada has a population of about 41 million people (2024 estimates), with major population centres in Toronto, Montreal, Vancouver, and Calgary.",
    languages:
      "English and French are the official languages at the federal level. Indigenous languages continue to be spoken in many communities, and regional language patterns vary significantly.",
    culture:
      "Canadian culture is shaped by Indigenous peoples, French and British traditions, immigration, and regional landscapes. It is often expressed through multicultural urban centres, remote communities, and long northern traditions.",
    knownFor:
      "Mountains, wilderness, Arctic landscapes, cities, and a large, lightly populated interior.",
    bestTimeToGo:
      "The most comfortable travel seasons vary by region, but late spring to early autumn is often ideal in many areas. Winter can be severe in much of the country, especially in the north and interior.",
    currency: "Canadian dollar (CAD).",
    currencyCode: "CAD",
    travelDocuments:
      "Travel requirements depend on nationality and current immigration rules. A valid passport is generally required, and visa conditions vary by citizenship.",
    generalTransport:
      "Canada relies heavily on air travel for long distances, along with rail, bus, and road networks. Urban public transit is common in major centres, while remote travel often depends on flights or road connections.",
    safety:
      "Canada is generally considered a low-risk destination for travelers, though conditions vary with season, remote travel, and local weather. Outdoor safety is important beyond major urban centres.",
    sources: ["Statistics Canada", "World Bank", "Government of Canada"],
  },
  {
    slug: "mexico",
    name: "Mexico",
    nativeName: "México",
    continent: "North America",
    heroImage: "/images/countries/mexico.svg",
    introduction:
      "Mexico spans much of the North American landmass and includes deserts, mountains, tropical coastlines, and a large central plateau. It is one of the most geographically diverse countries in the region.",
    people:
      "Mexico has a population of roughly 130 million people (2024 estimates), with major centres in Mexico City, Guadalajara, Monterrey, and Cancún.",
    languages:
      "Spanish is the official language. Mexico also has many Indigenous languages spoken in different communities, and the language mix varies widely by region.",
    culture:
      "Mexican culture is shaped by Indigenous civilizations, colonial-era traditions, and contemporary urban life. Food, religion, visual arts, and local festivals remain central to social identity.",
    knownFor:
      "Archaeological sites, desert and mountain landscapes, coastlines, cuisine, and a wide range of cultural and historic centres.",
    bestTimeToGo:
      "The dry season from November to April is often more comfortable in many regions, while summer brings heat and rainy conditions in parts of the country. Regions vary significantly in climate.",
    currency: "Mexican peso (MXN).",
    currencyCode: "MXN",
    travelDocuments:
      "A valid passport is generally required for international entry, and visa requirements depend on nationality and the same travel rules in force at the time of travel.",
    generalTransport:
      "Mexico has extensive road networks, domestic flights, buses, and rail services. Road travel is important for regional exploration, while buses support major intercity routes.",
    safety:
      "Travel conditions vary by region and city. Visitors should pay attention to local guidance, road safety, and transport choices, particularly when moving between urban and rural areas.",
    sources: ["INEGI", "World Bank", "Mexico Tourism"],
  },
  {
    slug: "guatemala",
    name: "Guatemala",
    nativeName: "Guatemala",
    continent: "North America",
    heroImage: "/images/countries/guatemala.svg",
    introduction:
      "Guatemala is a Central American country known for highland geography, volcanoes, and a diversity of Indigenous and colonial-era cultural landscapes. It sits between the Pacific coast and the Caribbean basin.",
    people:
      "Guatemala has a population of around 18 million people (2024 estimates), with major urban centres in Guatemala City and Antigua.",
    languages:
      "Spanish is the official language, but many Indigenous languages are widely spoken, including K'iche', Q'eqchi', Mam, and others. Regional linguistic diversity is important.",
    culture:
      "Guatemalan culture connects Indigenous traditions, Spanish colonial heritage, and contemporary urban life. Local customs, textiles, food, and religious festivals remain central to community identity.",
    knownFor:
      "Volcanoes, highland villages, Mayan heritage, colonial architecture, and ecological diversity.",
    bestTimeToGo:
      "The dry season from November to April is generally the most comfortable time for travel. Rainy months can affect roads and mountain access in some regions.",
    currency: "Guatemalan quetzal (GTQ).",
    currencyCode: "GTQ",
    travelDocuments:
      "A valid passport is generally required, and visa rules depend on nationality and current immigration conditions.",
    generalTransport:
      "Road transport is essential for intercity travel, while buses and shuttles are widely used. Domestic flights are available for longer routes but are less central than roads in many regions.",
    safety:
      "Travel conditions vary by region and route, with some areas requiring more caution than others. Visitors should consult local guidance, especially when moving outside major cities or through mountainous terrain.",
    sources: ["INE Guatemala", "World Bank", "Guatemala Tourism"],
  },
  {
    slug: "cuba",
    name: "Cuba",
    nativeName: "Cuba",
    continent: "North America",
    heroImage: "/images/countries/cuba.svg",
    introduction:
      "Cuba is the largest island in the Caribbean, with a long coastline, varied terrain, and a distinctive historical and political identity. It retains a strong cultural character shaped by colonial and socialist-era history.",
    people:
      "Cuba has a population of about 9.7 million people (2024 estimates), with Havana, Santiago de Cuba, and Camagüey as major cities.",
    languages:
      "Spanish is the official language. Regional variations and local speech patterns are common, and English is used in some tourist areas.",
    culture:
      "Cuban culture is shaped by Spanish colonial history, African heritage, Indigenous communities, music, and postcolonial political history. It is especially visible through music, literature, and urban architecture.",
    knownFor:
      "Cultural heritage, colonial cities, music, beaches, and a distinctive Caribbean identity.",
    bestTimeToGo:
      "Late autumn to spring is generally the most comfortable time for many travelers. Summer is hot and can be more humid, with hurricane season affecting the Caribbean coast.",
    currency: "Cuban peso (CUP); available tourist convertible peso (CUC) was phased out in favor of the Cuban peso in recent years.",
    currencyCode: "CUP",
    travelDocuments:
      "A valid passport is generally required, and visa conditions depend on nationality and current policy. Travelers should confirm current entry rules before departure.",
    generalTransport:
      "Road transport, taxis, buses, and domestic flights support movement across the island. Intercity travel is often dependent on roads and bus services, while ferry routes matter in some areas.",
    safety:
      "Cuba is generally manageable for travelers with standard precautions. Road conditions, transport reliability, and local regulations vary, so current advice is useful.",
    sources: ["ONEI Cuba", "World Bank", "Cuba Travel"],
  },
  {
    slug: "costa-rica",
    name: "Costa Rica",
    nativeName: "Costa Rica",
    continent: "North America",
    heroImage: "/images/countries/costa-rica.svg",
    introduction:
      "Costa Rica sits in Central America and is known for biodiversity, volcanoes, cloud forests, and a strong conservation focus. It has a comparatively small population and a geography shaped by ranges of mountains and coasts.",
    people:
      "Costa Rica has a population of around 5.2 million people (2024 estimates), with San José, Alajuela, and Liberia as major urban centres.",
    languages:
      "Spanish is the official language. English is widely used in tourism and some business contexts, especially in coastal and international travel areas.",
    culture:
      "Costa Rican culture reflects Indigenous heritage, Spanish colonial influences, and a strong contemporary emphasis on education, environmental stewardship, and community life.",
    knownFor:
      "Biodiversity, national parks, cloud forests, beaches, volcanoes, and eco-tourism.",
    bestTimeToGo:
      "The dry season from December to April tends to be the most comfortable for travel, while the green season can be wetter but still offers lush landscapes and fewer crowds.",
    currency: "Costa Rican colón (CRC).",
    currencyCode: "CRC",
    travelDocuments:
      "A valid passport is generally required, and visa requirements depend on nationality and the current entry rules in force for the traveler.",
    generalTransport:
      "Road transport is highly important, with buses and shuttles connecting major destinations. Domestic flights are used for some longer routes, and coastal ferry services matter in certain locations.",
    safety:
      "Costa Rica is generally considered a relatively manageable destination for travelers, though road conditions, wildlife, and weather can affect travel plans. Standard precautions remain advisable.",
    sources: ["INEC Costa Rica", "World Bank", "ICT Costa Rica"],
  },
  {
    slug: "jamaica",
    name: "Jamaica",
    nativeName: "Jamaica",
    continent: "North America",
    heroImage: "/images/countries/jamaica.svg",
    introduction:
      "Jamaica is an island nation in the Caribbean, known for mountain interior, limestone landscapes, and a strong local cultural identity. It sits within the Greater Antilles and is one of the region's larger islands.",
    people:
      "Jamaica has a population of about 2.8 million people (2024 estimates), with Kingston as the main population centre and other urban areas along the coasts.",
    languages:
      "English is the official language. Jamaican Patois is widely spoken and is a central part of the country's cultural life, especially outside formal settings.",
    culture:
      "Jamaican culture is shaped by African heritage, British colonial history, Caribbean traditions, and a strong music and literary scene. Reggae and local food culture are especially prominent.",
    knownFor:
      "Music, landscapes, coastlines, mountain terrain, and a distinct Caribbean cultural expression.",
    bestTimeToGo:
      "Late autumn to spring is often the most comfortable for travel, while summer can be warm and more humid. The hurricane season affects the Caribbean from June to November.",
    currency: "Jamaican dollar (JMD).",
    currencyCode: "JMD",
    travelDocuments:
      "Entry requirements depend on nationality and immigration rules. A valid passport is generally required, and some travelers may need a visa depending on citizenship.",
    generalTransport:
      "Roads, taxis, and domestic flights support movement across the island. Intercity travel is relatively manageable, though some rural areas remain dependent on road routes.",
    safety:
      "Jamaica is widely visited and can be navigated by travelers with standard precautions, but it is important to consult current guidance regarding specific regions and local transport conditions.",
    sources: ["STATIN Jamaica", "World Bank", "Jamaica Tourist Board"],
  },
  {
    slug: "brazil",
    name: "Brazil",
    nativeName: "Brasil",
    continent: "South America",
    heroImage: "/images/countries/brazil.svg",
    introduction:
      "Brazil is the largest country in South America and includes dense rainforest, savannah, coastlines, highlands, and major metropolitan centres. Its geography is extremely broad and its cultural identity is highly diverse.",
    people:
      "Brazil has a population of about 216 million people (2024 estimates), concentrated in large urban centres including São Paulo, Rio de Janeiro, and Brasília.",
    languages:
      "Portuguese is the official language. Brazil also includes many Indigenous languages and a range of immigrant-language communities, especially in urban areas.",
    culture:
      "Brazilian culture reflects Indigenous communities, African heritage, European immigration, and local regional traditions. It is expressed through music, dance, cuisine, literature, and public life.",
    knownFor:
      "Amazon rainforest, coastlines, samba and music culture, major cities, and large ecological diversity.",
    bestTimeToGo:
      "The best time depends on the region, but many travelers prefer the drier months of May to September in much of the country. Seasonal patterns vary significantly by area and elevation.",
    currency: "Brazilian real (BRL).",
    currencyCode: "BRL",
    travelDocuments:
      "A valid passport is generally required, and visa conditions depend on nationality and current immigration rules.",
    generalTransport:
      "Brazil has major domestic flights, bus networks, and rail routes, with large internal distances making air travel important for longer journeys. Urban mobility varies by region.",
    safety:
      "Brazil is widely visited, but conditions vary by city and region. Travelers should be aware of transport safety, local crime patterns, and environmental conditions in remote areas.",
    sources: ["IBGE", "World Bank", "Brazil Tourism"],
  },
  {
    slug: "argentina",
    name: "Argentina",
    nativeName: "Argentina",
    continent: "South America",
    heroImage: "/images/countries/argentina.svg",
    introduction:
      "Argentina is the second-largest country in South America and spans the Andes, grasslands, deserts, and a long Atlantic coastline. It has a strong regional identity shaped by geography and migration.",
    people:
      "Argentina has a population of about 45 million people (2024 estimates), with Buenos Aires, Córdoba, and Rosario among the largest urban centres.",
    languages:
      "Spanish is the official language. Indigenous languages and immigrant-language communities continue to be present, especially in particular regions and communities.",
    culture:
      "Argentine culture is shaped by European migration, Indigenous heritage, and the country's strong urban and rural traditions. Football, food, literature, and regional identities remain central.",
    knownFor:
      "Andes, Patagonia, wine regions, football culture, and a broad range of environmental and urban landscapes.",
    bestTimeToGo:
      "Spring and autumn are often the most comfortable periods for much of the country, while winter is important in the south and summer can be very hot in the north.",
    currency: "Argentine peso (ARS).",
    currencyCode: "ARS",
    travelDocuments:
      "A valid passport is generally required, with visa rules depending on nationality and current immigration policies.",
    generalTransport:
      "Domestic air travel is important for long distances, with buses and trains supporting intercity movement. Urban transport is strong in major cities but varies across regions.",
    safety:
      "Argentina is generally manageable for travelers with standard precautions, though safety and transport conditions vary by city and route. Travelers should pay attention to local guidance and regional differences.",
    sources: ["INDEC Argentina", "World Bank", "Argentina Tourism"],
  },
  {
    slug: "peru",
    name: "Peru",
    nativeName: "Perú",
    continent: "South America",
    heroImage: "/images/countries/peru.svg",
    introduction:
      "Peru is a country of coastal deserts, Andean ranges, and the Amazon basin, giving it one of the most varied configurations of landscape in South America. It has a long history of settlement and highland agriculture.",
    people:
      "Peru has a population of about 34 million people (2024 estimates), with Lima, Arequipa, and Trujillo among the most important urban centres.",
    languages:
      "Spanish is the official language, and many Indigenous languages remain significant, particularly Quechua and Aymara in highland communities. Regional language patterns are highly varied.",
    culture:
      "Peruvian culture reflects Indigenous traditions, Spanish colonial heritage, and the country's diverse regional identities. Food, textiles, and architecture are central cultural expressions.",
    knownFor:
      "Andean landscapes, archaeological sites, mountain regions, and culinary traditions associated with the country's diverse ecological zones.",
    bestTimeToGo:
      "The dry season from May to October is often the most comfortable for Andean and highland travel, while coastal weather varies by season. Different regions have different travel conditions.",
    currency: "Peruvian sol (PEN).",
    currencyCode: "PEN",
    travelDocuments:
      "A valid passport is generally required, and visa requirements depend on nationality and current immigration rules.",
    generalTransport:
      "Road, bus, rail, and domestic flights all play a role, with altitude regions often depending on road travel and flight connections. Travel times can be long between regions.",
    safety:
      "Peru is widely visited but conditions vary strongly by region, altitude, and route. Travel planning should account for weather, road quality, and local safety guidance.",
    sources: ["INEI Peru", "World Bank", "Peru Tourism"],
  },
  {
    slug: "chile",
    name: "Chile",
    nativeName: "Chile",
    continent: "South America",
    heroImage: "/images/countries/chile.svg",
    introduction:
      "Chile stretches along the western edge of South America and is shaped by the Andes, a long coastal strip, and the Atacama Desert. Its geography creates strong contrasts between dry north, temperate centre, and southern fjord landscapes.",
    people:
      "Chile has a population of about 19 million people (2024 estimates), with Santiago, Valparaíso, and Concepción among the main urban centres.",
    languages:
      "Spanish is the official language. Indigenous languages remain present in some communities, and regional identities are also expressed in local speech and customs.",
    culture:
      "Chilean culture reflects Indigenous, European, and urban influences, with strong regional distinctions between the north, centre, and south. Culture is expressed through food, wine, architecture, and public life.",
    knownFor:
      "Andes, Atacama, Patagonia, wine regions, seismic geography, and a long coastal edge.",
    bestTimeToGo:
      "The best season depends on the region. Much of the country is most comfortable in spring and autumn, while Patagonia is often best in the warmer months and the north is dry year-round.",
    currency: "Chilean peso (CLP).",
    currencyCode: "CLP",
    travelDocuments:
      "A valid passport is generally required, and visa conditions vary by nationality and current immigration rules.",
    generalTransport:
      "Chile has strong domestic air connections, bus services, and rail routes. Road travel matters heavily for exploring the long, narrow country, particularly outside major cities.",
    safety:
      "Chile is generally considered a manageable destination for travelers, though road conditions, weather, and remote areas require planning. Regional differences matter significantly.",
    sources: ["INE Chile", "World Bank", "Chile Tourism"],
  },
  {
    slug: "colombia",
    name: "Colombia",
    nativeName: "Colombia",
    continent: "South America",
    heroImage: "/images/countries/colombia.svg",
    introduction:
      "Colombia sits in the northwestern part of South America and includes the Andes, Caribbean coast, Pacific coast, and Amazonian lowlands. It is a country of strong contrasts in elevation, climate, and cultural geography.",
    people:
      "Colombia has a population of roughly 52 million people (2024 estimates), with Bogotá, Medellín, Cali, and Cartagena among the biggest urban centres.",
    languages:
      "Spanish is the official language. Indigenous languages remain in active use in many communities, and regional communities maintain distinct cultural practices.",
    culture:
      "Colombian culture is highly diverse, shaped by Indigenous traditions, African heritage, and European settlement. Regional identities remain strong, especially in music, food, and local traditions.",
    knownFor:
      "Andes, coffee regions, Caribbean coast, biodiversity, and a broad cultural mix.",
    bestTimeToGo:
      "The driest and most comfortable periods vary by region. In general, December to March and June to September are often pleasant for much of the country, while the Caribbean and Pacific can differ significantly.",
    currency: "Colombian peso (COP).",
    currencyCode: "COP",
    travelDocuments:
      "A valid passport is generally required, and visa requirements vary by nationality and current immigration rules.",
    generalTransport:
      "Road and bus travel are central to intercity movement, while domestic flights connect major regions. Urban transit is developed in many cities, though travel times can be long between regions.",
    safety:
      "Colombia is widely visited but conditions vary strongly by area, route, and time. Travelers should check local guidance, especially when traveling outside established urban centres.",
    sources: ["DANE Colombia", "World Bank", "Colombia Tourism"],
  },
  {
    slug: "ecuador",
    name: "Ecuador",
    nativeName: "Ecuador",
    continent: "South America",
    heroImage: "/images/countries/ecuador.svg",
    introduction:
      "Ecuador sits on the equator and includes the Andes, volcanic peaks, rainforest, and Pacific coast. It is one of the most geographically compact countries in South America but has significant ecological and climatic diversity.",
    people:
      "Ecuador has a population of around 18 million people (2024 estimates), with Quito, Guayaquil, and Cuenca among the main urban centres.",
    languages:
      "Spanish is the official language. Indigenous languages such as Quechua remain significant, and regional languages and customs are still widely present.",
    culture:
      "Ecuadorian culture reflects Indigenous heritage, Spanish colonial influence, and diverse regional identities. It is strongly linked to mountainous, coastal, and Amazonian landscapes.",
    knownFor:
      "Volcanoes, Andean landscapes, biodiversity, the Galápagos, and a wide ecological range.",
    bestTimeToGo:
      "The dry season from June to September and December to March can be comfortable in different regions. Local conditions vary significantly by altitude and whether the traveler is on the coast, highlands, or Amazon.",
    currency: "United States dollar (USD) is used in Ecuador.",
    currencyCode: "USD",
    travelDocuments:
      "A valid passport is generally required, and visa conditions depend on nationality and current immigration rules.",
    generalTransport:
      "Roads and buses are central to internal travel, while domestic flights connect major regions. Longer journeys can be slow, especially between the coast, Andes, and Amazon.",
    safety:
      "Ecuador is manageable for visitors with standard precautions, though regional security and travel conditions vary. Travelers should review current guidance, especially when moving between city and rural environments.",
    sources: ["INEC Ecuador", "World Bank", "Ecuador Tourism"],
  },
  {
    slug: "bolivia",
    name: "Bolivia",
    nativeName: "Bolivia",
    continent: "South America",
    heroImage: "/images/countries/bolivia.svg",
    introduction:
      "Bolivia is a landlocked country in central South America and is defined by the Andes, highland plateaus, and Amazonian lowlands. It is one of the continent's most geographically diverse states, with strong altitude variation.",
    people:
      "Bolivia has a population of about 12 million people (2024 estimates), with La Paz, Santa Cruz, and Cochabamba among the main urban centres.",
    languages:
      "Spanish, Quechua, and Aymara are among the country's principal languages, and Bolivia recognizes a broad range of Indigenous languages and regional linguistic communities.",
    culture:
      "Bolivian culture is shaped by Indigenous communities, Spanish colonial heritage, and regional traditions across the highlands and lowlands. This diversity is strongly visible in language, food, and public traditions.",
    knownFor:
      "Altiplano, salt flats, mountain landscapes, Indigenous heritage, and the connection between highland and lowland ecologies.",
    bestTimeToGo:
      "Dry season from May to October is often more comfortable for much of the country. In the highlands, temperatures can be cold, while lowland regions require different seasonal expectations.",
    currency: "Bolivian boliviano (BOB).",
    currencyCode: "BOB",
    travelDocuments:
      "A valid passport is generally required, and visa rules depend on nationality and current immigration regulations.",
    generalTransport:
      "Road transport is highly important for domestic travel, while domestic flights connect major urban centres. Some remote areas are accessed by long road journeys or limited air services.",
    safety:
      "Bolivia is widely traveled but conditions vary strongly by altitude, road quality, and region. Travelers should plan carefully for mountain travel and follow local guidance in more remote areas.",
    sources: ["INE Bolivia", "World Bank", "Bolivia Tourism"],
  },
  {
    slug: "australia",
    name: "Australia",
    nativeName: "Australia",
    continent: "Oceania",
    heroImage: "/images/countries/australia.svg",
    introduction:
      "Australia is a large Oceania country made up of a single continental landmass and surrounding islands. Its geography includes desert interiors, coastal cities, river systems, and distinctive ecosystems.",
    people:
      "Australia has a population of around 27 million people (2024 estimates), with Sydney, Melbourne, Brisbane, and Perth among the major urban centres.",
    languages:
      "English is the primary official language. Aboriginal and Torres Strait Islander languages remain spoken in many communities, and regional language diversity is an important part of the country's cultural life.",
    culture:
      "Australian culture reflects Indigenous heritage, British colonial history, migration, and a strong connection to the land. It is expressed through local communities, art, sport, and urban life.",
    knownFor:
      "Outback, reef systems, coastal cities, desert landscapes, wildlife, and a strong connection to natural environments.",
    bestTimeToGo:
      "The best time to travel depends on the region. Spring and autumn are comfortable in many areas, while the north is often more comfortable in the dry season and the south in the warmer months.",
    currency: "Australian dollar (AUD).",
    currencyCode: "AUD",
    travelDocuments:
      "Entry conditions depend on citizenship and current immigration rules. A valid passport is generally required, and travelers should confirm visa requirements before departure.",
    generalTransport:
      "Australia relies heavily on domestic flights, rail, and extensive road networks. Cities are well connected, and long-distance travel often depends on air or long road journeys.",
    safety:
      "Australia is generally regarded as a low-risk destination for travelers, though road safety, heat exposure, wildlife, and remote-area conditions remain important considerations.",
    sources: ["ABS Australia", "World Bank", "Tourism Australia"],
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    nativeName: "Aotearoa",
    continent: "Oceania",
    heroImage: "/images/countries/new-zealand.svg",
    introduction:
      "New Zealand is an island country in the South Pacific, known for alpine landscapes, fiords, volcanic terrain, and a long Pacific and Polynesian cultural history. It is composed of two main islands and many smaller ones.",
    people:
      "New Zealand has a population of about 5.2 million people (2024 estimates), with Auckland, Wellington, Christchurch, and Dunedin as major centres.",
    languages:
      "English and Māori are the official languages. The country also includes multiple Pacific languages and diasporic communities, and regional language diversity is important.",
    culture:
      "New Zealand culture is shaped by Māori heritage, European settlement, and a strong Pacific influence. Art, language, sports, and environmental stewardship remain central.",
    knownFor:
      "Alpine scenery, fjords, volcanic landscapes, and a strong connection to Indigenous and Pacific heritage.",
    bestTimeToGo:
      "Late spring to early autumn is often the most comfortable period for travel, while alpine conditions require more planning in winter. Weather varies markedly across the islands.",
    currency: "New Zealand dollar (NZD).",
    currencyCode: "NZD",
    travelDocuments:
      "Travel requirements depend on nationality and current immigration rules. A valid passport is generally required, and visas vary by citizenship and travel purpose.",
    generalTransport:
      "New Zealand has domestic flights, buses, and a reasonably strong road network. Rail service is limited in comparison with road and air travel, especially outside the main corridors.",
    safety:
      "New Zealand is generally considered a low-risk destination, though outdoor travel requires attention to weather, terrain, and safety planning in remote areas.",
    sources: ["Stats NZ", "World Bank", "Tourism New Zealand"],
  },
  {
    slug: "fiji",
    name: "Fiji",
    nativeName: "Fiji",
    continent: "Oceania",
    heroImage: "/images/countries/fiji.svg",
    introduction:
      "Fiji is an island nation in the South Pacific with more than 300 islands and a strong maritime identity. It is defined by coastal landscapes, coral reefs, mountainous islands, and a mix of Indigenous and migrant communities.",
    people:
      "Fiji has a population of about 0.9 million people (2024 estimates), with Suva, Lautoka, and Nadi as the main urban centres.",
    languages:
      "Fijian, Hindi, and English are all widely used, and English is the language of government and business. The country's multilingual makeup reflects its social and historical diversity.",
    culture:
      "Fijian culture reflects Indigenous traditions, Indo-Fijian heritage, and a long history of migration and regional trade. Communities maintain distinct local identities while sharing broader national institutions.",
    knownFor:
      "Islands, reefs, coral systems, marine biodiversity, and a strong Pacific island identity.",
    bestTimeToGo:
      "The cooler, drier months from May to October are generally a comfortable time for travel. Wet-season conditions can affect some locations and coastal access.",
    currency: "Fijian dollar (FJD).",
    currencyCode: "FJD",
    travelDocuments:
      "A valid passport is generally required, and visa conditions vary by nationality and current immigration regulations.",
    generalTransport:
      "Fiji relies on domestic flights, ferries, and roads for movement between islands and towns. Coastal travel and island hopping are especially significant.",
    safety:
      "Fiji is generally manageable for visitors with standard precautions. Conditions vary by island, weather, and transport route, and travelers should take local advice into account.",
    sources: ["Fiji Bureau of Statistics", "World Bank", "Tourism Fiji"],
  },
  {
    slug: "papua-new-guinea",
    name: "Papua New Guinea",
    nativeName: "Papua New Guinea",
    continent: "Oceania",
    heroImage: "/images/countries/papua-new-guinea.svg",
    introduction:
      "Papua New Guinea occupies the eastern half of the island of New Guinea and includes hundreds of smaller islands. It is one of the most linguistically diverse countries in the world, with rugged terrain and distinctive island communities.",
    people:
      "Papua New Guinea has a population of around 11 million people (2024 estimates), with Port Moresby, Lae, and Mount Hagen as major centres.",
    languages:
      "Tok Pisin, English, and Hiri Motu are widely used, while there are also hundreds of local languages spoken across the country. The linguistic diversity is among the highest in the world.",
    culture:
      "Papua New Guinean culture is highly diverse and shaped by local traditions, kinship systems, and deep connections to place. Art, ritual practice, and community leadership remain central in many regions.",
    knownFor:
      "Island and mountain landscapes, language diversity, coral reefs, and distinct cultural traditions.",
    bestTimeToGo:
      "Cultural and environmental travel conditions vary widely. The drier months are generally more comfortable for travel, though weather, terrain, and logistics differ substantially by region.",
    currency: "Papua New Guinean kina (PGK).",
    currencyCode: "PGK",
    travelDocuments:
      "A valid passport is generally required, and visa rules depend on nationality and current immigration procedures.",
    generalTransport:
      "Air travel and roads are important in urbanised areas, while many regions depend on boats, local transport, and limited infrastructure. Travel to remote areas can be lengthy and variable.",
    safety:
      "Travel conditions vary strongly by region and logistics. Visitors should prepare carefully for remoteness, weather, and local transport conditions and seek current guidance before moving beyond major centres.",
    sources: ["PNG National Statistical Office", "World Bank", "PNG Tourism"],
  },
  {
    slug: "vanuatu",
    name: "Vanuatu",
    nativeName: "Vanuatu",
    continent: "Oceania",
    heroImage: "/images/countries/vanuatu.svg",
    introduction:
      "Vanuatu is a Pacific island nation of volcanic islands and coral atolls. It has a compact population and a culture deeply tied to island communities, customary practices, and marine environments.",
    people:
      "Vanuatu has a population of about 330,000 people (2024 estimates), with Port Vila and Luganville as the main population centres.",
    languages:
      "Bislama, English, and French are the principal languages. Local Indigenous languages remain important in many communities and regions.",
    culture:
      "Vanuatu's culture is strongly rooted in local customary practice, oral tradition, and island identities. Music, ritual, and community traditions remain central to public life.",
    knownFor:
      "Volcanic islands, coral reefs, ocean landscapes, and a strong culture of custom and community.",
    bestTimeToGo:
      "The dry season from May to October is commonly the most comfortable for travel. Wet-season conditions can be wetter and more variable, especially for island transport.",
    currency: "Vanuatu vatu (VUV).",
    currencyCode: "VUV",
    travelDocuments:
      "Entry requirements depend on nationality and current immigration rules. A valid passport is generally required and visa conditions vary by traveler.",
    generalTransport:
      "Domestic travel relies on small planes, ferries, and local road networks. The dispersed island geography means flights and sea travel are often central to movement.",
    safety:
      "Vanuatu is generally manageable for visitors with standard precautions. Weather, island transport, and remote routes should be considered, especially outside major population centres.",
    sources: ["Vanuatu National Statistics Office", "World Bank", "Vanuatu Tourism"],
  },
  {
    slug: "samoa",
    name: "Samoa",
    nativeName: "Samoa",
    continent: "Oceania",
    heroImage: "/images/countries/samoa.svg",
    introduction:
      "Samoa is a Pacific island nation of volcanic islands and strong cultural continuity. It has a warm tropical climate, strong village traditions, and a complex relationship between community life and ocean geography.",
    people:
      "Samoa has a population of about 220,000 people (2024 estimates), with Apia as the main population centre.",
    languages:
      "Samoan and English are both official languages. Local speech patterns and cultural practices remain central across the islands.",
    culture:
      "Samoan culture is built around village communities, customary practice, family structure, and strong ties to land and sea. Cultural life remains closely connected to local tradition.",
    knownFor:
      "Pacific island landscapes, oceanic heritage, village life, and coral and volcanic environments.",
    bestTimeToGo:
      "The dry season from May to October is usually the most comfortable time for travel. Tropical weather can remain warm and variable year-round, and wet-season conditions affect some locations.",
    currency: "Samoan tālā (WST).",
    currencyCode: "WST",
    travelDocuments:
      "A valid passport is generally required, and visa requirements depend on nationality and current immigration rules.",
    generalTransport:
      "Interisland travel relies heavily on boats and small aircraft, while roads are limited outside major centres. Local transport is generally simple but routes can be irregular.",
    safety:
      "Samoa is generally manageable for visitors with standard precautions, but weather, sea travel, and remote islands require practical planning and local awareness.",
    sources: ["Samoa Bureau of Statistics", "World Bank", "Samoa Tourism"],
  },
  {
    slug: "tonga",
    name: "Tonga",
    nativeName: "Tonga",
    continent: "Oceania",
    heroImage: "/images/countries/tonga.svg",
    introduction:
      "Tonga is a Pacific island kingdom of more than 170 islands, known for coral landscapes, coastal villages, and a strong maritime culture. It sits in the South Pacific and is shaped by ocean travel and island communities.",
    people:
      "Tonga has a population of just over 100,000 people (2024 estimates), with Nuku'alofa as the main urban centre.",
    languages:
      "Tongan and English are both official languages. Local communities also maintain distinct dialect and cultural practices in island settings.",
    culture:
      "Tongan culture is deeply tied to kinship, community life, and oceanic traditions. Ceremonies, language, agriculture, and marine practices remain central to local identity.",
    knownFor:
      "Pacific island geography, coral reefs, oceanic culture, and highly distinct island communities.",
    bestTimeToGo:
      "The dry season from May to October is generally the most comfortable time for travel. Tropical weather remains warm and variable throughout the year, with the wet season affecting sea travel.",
    currency: "Tongan paʻanga (TOP).",
    currencyCode: "TOP",
    travelDocuments:
      "A valid passport is generally required, and visa conditions vary by nationality and current migration rules.",
    generalTransport:
      "Interisland ferries and small aircraft are key transport modes, with roads limited to some islands and urban centres. Logistics can be slower and more weather-dependent than in larger countries.",
    safety:
      "Tonga is generally manageable for visitors with standard precautions, though island transport, weather, and remoteness are important factors in trip planning.",
    sources: ["Tonga Statistics Department", "World Bank", "Tourism Tonga"],
  },
];

const createAsiaCountry = (slug: string, name: string, imageName: string) => ({
  name,
  heroImage: `/images/Asia/${imageName} Card.jpeg`,
});

const additionalAsiaCountries = [
  ["afghanistan", "Afghanistan", "Afghanistan"],
  ["armenia", "Armenia", "Armenia"],
  ["azerbaijan", "Azerbaijan", "Azerbeijan"],
  ["bahrain", "Bahrain", "Bahrain"],
  ["bangladesh", "Bangladesh", "Bangladesh"],
  ["bhutan", "Bhutan", "Bhutan"],
  ["brunei", "Brunei", "Brunei"],
  ["cambodia", "Cambodia", "Cambodia"],
  ["cyprus", "Cyprus", "Cyprus"],
  ["georgia", "Georgia", "Georgia"],
  ["iran", "Iran", "Iran"],
  ["iraq", "Iraq", "Iraq"],
  ["israel", "Israel", "Israel"],
  ["jordan", "Jordan", "Jordan"],
  ["kazakhstan", "Kazakhstan", "Kazakhstan"],
  ["kuwait", "Kuwait", "Kuwait"],
  ["kyrgyzstan", "Kyrgyzstan", "Kyrgyzstan"],
  ["laos", "Laos", "Laos"],
  ["lebanon", "Lebanon", "Lebanon"],
  ["malaysia", "Malaysia", "Malaysia"],
  ["maldives", "Maldives", "Maldives"],
  ["mongolia", "Mongolia", "Mongolia"],
  ["myanmar", "Myanmar", "Myanmar"],
  ["nepal", "Nepal", "Nepal"],
  ["north-korea", "North Korea", "North Korea"],
  ["oman", "Oman", "Oman"],
  ["pakistan", "Pakistan", "Pakistan"],
  ["palestine", "Palestine", "Palestine"],
  ["philippines", "Philippines", "Philippines"],
  ["qatar", "Qatar", "Qatar"],
  ["saudi-arabia", "Saudi Arabia", "Saudi Arabia"],
  ["singapore", "Singapore", "Singapore"],
  ["sri-lanka", "Sri Lanka", "Sri Lanka"],
  ["syria", "Syria", "Syria"],
  ["tajikistan", "Tajikistan", "Tajikistan"],
  ["timor-leste", "Timor-Leste", "Timor-Leste"],
  ["turkey", "Turkey", "Turkey"],
  ["turkmenistan", "Turkmenistan", "Turkmenistan"],
  ["united-arab-emirates", "United Arab Emirates", "United Arab Emirates"],
  ["uzbekistan", "Uzbekistan", "Uzbekistan"],
  ["yemen", "Yemen", "Yemen"],
].map(([slug, name, imageName]) => createAsiaCountry(slug, name, imageName));

const nativeNameOverrides: Record<string, string> = {
  kenya: "Kenya",
  "south-africa": "iNingizimu Afrika",
  ghana: "Ghana",
  tanzania: "Tanzania",
  france: "France",
  italy: "Italia",
  spain: "España",
  greece: "Ελλάδα",
  portugal: "Portugal",
  germany: "Deutschland",
  switzerland: "Schweiz / Suisse / Svizzera / Svizra",
  "united-states": "United States",
  canada: "Canada",
  mexico: "México",
  guatemala: "Guatemala",
  cuba: "Cuba",
  "costa-rica": "Costa Rica",
  jamaica: "Jamaica",
  brazil: "Brasil",
  argentina: "Argentina",
  peru: "Perú",
  chile: "Chile",
  colombia: "Colombia",
  ecuador: "Ecuador",
  bolivia: "Bolivia",
  australia: "Australia",
  "new-zealand": "Aotearoa",
  fiji: "Viti",
  "papua-new-guinea": "Papua Niugini",
  vanuatu: "Vanuatu",
  samoa: "Sāmoa",
  tonga: "Tonga",
};

const slugifyCountryName = (name: string) =>
  name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const overviewSlugAliases: Record<string, string> = {
  "Cabo Verde": "cape-verde",
  "Democratic Republic of the Congo": "dr-congo",
  "Republic of the Congo": "congo",
  "Côte d’Ivoire": "ivory-coast",
};

const overviewBySlug = new Map(
  countryOverviewData.countries.map((country) => [
    overviewSlugAliases[country.name] ?? slugifyCountryName(country.name),
    country,
  ]),
);

const peopleOverviewText = (countryName: string, value: string, culture: string) => {
  const match = value.match(/^A diverse population with (.+?) among its major languages, alongside (.+)\.$/);

  if (match) {
    const culturalReference = culture.split(".")[0].trim().replace(/\.$/, "").toLowerCase();
    return `${countryName} is home to regional communities and identities shaped by ${culturalReference}.`;
  }

  return value;
};

const languageOverviewText = (countryName: string, value: string) => {
  const [languagePart, scriptPart] = value.split(". Major scripts include ");
  const languages = languagePart.replace(/ are among the country's major languages$/, "");
  const scripts = scriptPart?.replace(/\.$/, "");

  return `The main languages spoken in ${countryName} include ${languages}.${scripts ? ` They are primarily written using ${scripts.toLowerCase()}.` : ""}`;
};

const bestTimeOverviewText = (countryName: string, value: string) =>
  `The most suitable time to visit ${countryName} is generally ${value}. These periods are recommended for more comfortable conditions and easier access to the country's main destinations, although weather varies by region.`;

const directoryIntroductionText = (
  country: Country,
  overview: (typeof countryOverviewData.countries)[number],
) => {
  const lead = country.introduction;
  return `${lead} ${overview.culture} The country is especially known for ${overview.knownFor.toLowerCase()}`;
};

const existingCountries = baseCountryCatalog;
const existingSlugs = new Set(existingCountries.map((country) => country.slug));
const asiaImageByName = new Map(
  additionalAsiaCountries.map((country) => [country.name, country.heroImage]),
);
const europeImageNames = new Set([
  "Albania",
  "Andorra",
  "Austria",
  "Belarus",
  "Belgium",
  "Bosnia and Herzegovina",
  "Bulgaria",
  "Croatia",
  "Czechia",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "North Macedonia",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Ukraine",
  "United Kingdom",
  "Vatican City",
]);

const uploadedCountryImage = (continent: string, name: string) => {
  if (continent === "Europe" && europeImageNames.has(name)) {
    const extension = name === "North Macedonia" ? "jpg" : "jpeg";
    return `/images/Europe/${name} Card.${extension}`;
  }

  return undefined;
};
const countrySlugAliases: Record<string, string> = {
  Türkiye: "turkey",
};

const directoryCountries: Country[] = completeCountryDirectory
  .map((country) => ({
    slug: countrySlugAliases[country.name] ?? slugifyCountryName(country.name),
    name: country.name,
    nativeName: country.nativeName,
    continent: country.continent,
    heroImage:
      uploadedCountryImage(country.continent, country.name) ??
      asiaImageByName.get(country.name) ??
      "/images/paper-texture.svg",
    currencyCode: country.currencyCode || undefined,
    introduction:
      country.summary || `${country.officialName} is located in ${country.subregion || country.region}. Its capital is ${country.capital || "not listed in the source dataset"}.`,
    people: country.population
      ? `Population: ${country.population.toLocaleString()}. The country includes communities shaped by its regional history and settlement patterns.`
      : "Population data is not listed in the source dataset.",
    languages: country.languages || "Language data is not listed in the source dataset.",
    culture: country.summary || "A country-specific cultural summary is not available in the source dataset.",
    knownFor: country.summary || "A country-specific known-for summary is not available in the source dataset.",
    bestTimeToGo: `Travel conditions vary across ${country.subregion || country.region}; check the destination's official tourism and weather services for the best months for your route.`,
    currency: country.currencies || "Currency data is not listed in the source dataset.",
    travelDocuments: "Review the current Indian-citizen entry checklist.",
    generalTransport: `Transport patterns vary between the capital, major cities, and rural areas of ${country.name}; check official local transport information for your route.`,
    safety: `Review current government travel advice for ${country.name}, including guidance relevant to women, older travellers, children, health, and local transport.`,
    sources: ["Mledoze countries dataset", "Wikipedia country summary", "United Nations", "World Bank"],
    overviewItems: [
      { label: "People", value: country.population ? `Population: ${country.population.toLocaleString()}.` : "Population data is not listed in the source dataset." },
      { label: "Languages", value: country.languages || "Language data is not listed in the source dataset." },
      { label: "Culture", value: country.summary || "A country-specific cultural summary is not available in the source dataset." },
      { label: "Known for", value: country.summary || "A country-specific known-for summary is not available in the source dataset." },
      { label: "Best time to go", value: `Travel conditions vary across ${country.subregion || country.region}; check official tourism and weather services for the best months for your route.` },
      { label: "Currency", value: country.currencies || "Currency data is not listed in the source dataset." },
      { label: "Travel documents", value: "Review the current Indian-citizen entry checklist." },
      { label: "General transport", value: `Transport patterns vary between the capital, major cities, and rural areas of ${country.name}; check official local transport information for your route.` },
      { label: "Safety", value: `Review current government travel advice for ${country.name}, including guidance relevant to women, older travellers, children, health, and local transport.` },
    ],
  }))
  .filter((country) => !existingSlugs.has(country.slug));

export const countryCatalog: Country[] = [...existingCountries, ...directoryCountries].map(
  (country) => {
    const overview = overviewBySlug.get(country.slug);

    if (!overview) {
      return {
        ...country,
        heroImage: uploadedCountryImage(country.continent, country.name) ?? country.heroImage,
        nativeName: nativeNameOverrides[country.slug] ?? country.nativeName,
      };
    }

    return {
      ...country,
      heroImage: uploadedCountryImage(country.continent, country.name) ?? country.heroImage,
      nativeName: nativeNameOverrides[country.slug] ?? country.nativeName,
      introduction: existingSlugs.has(country.slug)
        ? country.introduction
        : directoryIntroductionText(country, overview),
      people: country.slug === "japan" ? country.people : peopleOverviewText(country.name, overview.people, overview.culture),
      languages: country.slug === "japan" ? country.languages : languageOverviewText(country.name, overview.languages),
      culture: overview.culture,
      knownFor: overview.knownFor,
      bestTimeToGo: bestTimeOverviewText(country.name, overview.bestTimeToGo),
      generalTransport: overview.generalTransport,
      safety: overview.safety,
      sources: [...overview.sources],
      overviewItems: [
        { label: "People", value: country.slug === "japan" ? country.people : peopleOverviewText(country.name, overview.people, overview.culture) },
        { label: "Languages", value: country.slug === "japan" ? country.languages : languageOverviewText(country.name, overview.languages) },
        { label: "Culture", value: overview.culture },
        { label: "Known for", value: overview.knownFor },
        { label: "Best time to go", value: bestTimeOverviewText(country.name, overview.bestTimeToGo) },
        { label: "Currency", value: country.currency },
        { label: "Travel documents", value: country.travelDocuments },
        { label: "General transport", value: overview.generalTransport },
        { label: "Safety", value: overview.safety },
      ],
    };
  },
);

export const countriesByContinent = {
  africa: countryCatalog
    .filter((country) => country.continent === "Africa")
    .sort((first, second) => first.name.localeCompare(second.name)),
  asia: countryCatalog
    .filter((country) => country.continent === "Asia")
    .sort((first, second) => first.name.localeCompare(second.name)),
  europe: countryCatalog
    .filter((country) => country.continent === "Europe")
    .sort((first, second) => first.name.localeCompare(second.name)),
  "north-america": countryCatalog
    .filter((country) => country.continent === "North America")
    .sort((first, second) => first.name.localeCompare(second.name)),
  "south-america": countryCatalog
    .filter((country) => country.continent === "South America")
    .sort((first, second) => first.name.localeCompare(second.name)),
  oceania: countryCatalog
    .filter((country) => country.continent === "Oceania")
    .sort((first, second) => first.name.localeCompare(second.name)),
} as const;

export const countryIndex = Object.fromEntries(
  countryCatalog.map((country) => [country.slug, country]),
) as Record<string, Country>;

export function getCountriesForContinent(continentSlug: string) {
  return countriesByContinent[continentSlug as keyof typeof countriesByContinent] ?? [];
}

export function getCountryBySlug(continentSlug: string, countrySlug: string) {
  const continentCountries = getCountriesForContinent(continentSlug);
  return continentCountries.find((country) => country.slug === countrySlug);
}
