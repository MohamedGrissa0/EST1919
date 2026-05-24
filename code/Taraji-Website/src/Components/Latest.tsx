import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

type newsShape = {
  id : Number,
  title:String,
  image:String ,
  content:String
}
 const news = [
  {
  id:1 ,
  title: "LAFC - EST : (0 - 1) Victoire historique à Nashville",
  image: "https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/511119129_1147494764075678_2775983794870047870_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qw8rnnjGBaYQ7kNvwEIXTUb&_nc_oc=Adl4ecTkRYsJgoZOfgFEypC1ViRtq1JsoSC20hZ4xZm--frLx8YLeYzCf0F8Y4zDvHY&_nc_zt=23&_nc_ht=scontent.ftun14-1.fna&_nc_gid=U3hlyu5-gZamjMERGL-d7A&oh=00_AfNUT5dOWQgtalkTSkz22-3mWEAvVWmwX-Pv0NGHvFbDig&oe=685EE9DB",
  content:"L’Espérance de Tunis a signé une victoire aussi précieuse qu’historique en s’imposant 1-0 face à Los Angeles FC au Geodis Park de Nashville, pour le compte de la deuxième journée du groupe D de la Coupe du Monde des clubs 2025. Une victoire qui relance totalement les Sang et Or dans la course à la qualification pour les quarts de finale et permet de rêver encore avant un dernier choc face à Chelsea. , Contrairement à leur premier match face à Flamengo, les coéquipiers de Yassine Meriah ont cette fois affronté un adversaire à leur portée. Dès les premières minutes, les intentions étaient claires : l’Espérance a mis le pied sur le ballon, s’est montrée agressive dans les duels et a multiplié les incursions offensives. Youcef Belaïli, très inspiré, s’est signalé dès la 4e minute par une frappe bien repoussée par Lloris. Quelques instants plus tard, Rodrigo Rodrigues faisait trembler le cadre d’un tir puissant qui échouait sur le poteau. "
},
  {
  id:2 ,
  title: "CRF - EST : (2 - 0) : Flamengo trop fort",
  image: "https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/508477519_1144676351024186_4403751388328417830_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TFo8ze5CQG4Q7kNvwGt2no0&_nc_oc=Adko5W38gEJf67zHfwKZzOApqDdx2Qczvgg0pzJAeknPSduU1QbLT_9MZNb9Bvuv4m0&_nc_zt=23&_nc_ht=scontent.ftun14-1.fna&_nc_gid=5DISyBN8uMpgHHSUIR-jpQ&oh=00_AfM3b8s4TCL2g9Toxig14ublO-6YEgWJeLsM-iqhZCvxvQ&oe=685EFE4E",
  content:"Il n’y avait pas photo ce matin entre Flamengo et l’Espérance de Tunis dans cette première journée du Groupe D de la Coupe du Monde des Clubs. Les Brésiliens ont imposé leur supériorité à tous les niveaux pour s’imposer logiquement 2-0, dans un match disputé au Lincoln Financial Field de Philadelphie. Les Sang et Or, en dépit de moyens limités, ont su faire preuve de courage, de discipline et de combativité, galvanisés par leurs supporters présents en nombre dans les tribunes américaines."
},

  {
    id: 3,
    title: "Aïd Moubarak !",
    image: 'https://e-s-tunis.com/images/news/2020/07/30/1596149036_img.jpg',
    content: 'A loccasion de lAïd el Idhha E-S-Tunis  présente ses meilleurs voeux de santé, bonheur et prospérité, et ses vives félicitations aux TarajjiManiaques, à toute la famille Sang et Or, ainsi qu à tous les musulmans et musulmanes a travers le monde '
  },
  {
    id: 4,
    title: 'Présentation des maillots de la Coupe du Monde',
    image: 'https://e-s-tunis.com/images/news/2025/06/05/1749079668_img.jpg',
    content: 'LEspérance de Tunis a créé leffervescence ce soir chez les supporters en dévoilant ses trois nouveaux maillots pour la Coupe du Monde des Clubs FIFA 2025 et la saison 2025/2026. Produits par léquipementier italien Kappa, ces maillots arborent fièrement les couleurs emblématiques du club et de la Tunisie. , Les fans impatients pourront bientôt se les procurer dans les célèbres Taraji Stores, les boutiques officielles du club. ,Le moment fort pour les supporters et les joueurs sera sans aucun doute le mardi 17 juin lors du match face à Flamengo dans le groupe D. Cest à cette occasion que les joueurs sang et or auront lhonneur de revêtir ce maillot flambant neuf.' 
    
  },
{
  id: 5,
  title: "ST - EST : (0 - 1) L’Espérance sacre une saison royale par un doublé !",
  image: "https://e-s-tunis.com/images/news/2025/06/01/1748805592_img.jpg",
  content:
    "L’Espérance Sportive de Tunis a décroché cet après-midi un nouveau trophée à son palmarès en s’imposant face au Stade Tunisien (1-0) en finale de la Coupe de Tunisie 2025. Neuf ans après sa dernière victoire dans cette compétition, le club de Bab Souika renoue avec la Coupe pour la 16e fois de son histoire, un record national, et boucle la saison en beauté avec un sixième doublé championnat-coupe. " +
    "La rencontre a débuté sur un rythme intense, les deux formations affichant clairement leurs intentions : ouvrir le score rapidement pour s’installer aux commandes de la partie. Si les intentions étaient là, les occasions franches se faisaient pourtant attendre. À la demi-heure de jeu, on ne dénombrait que quelques situations imprécises de part et d’autre, sans réel danger pour les portiers Sami Helal et Béchir Ben Saïd. " +
    "La fin du premier acte fut davantage marquée par des approximations techniques, qui ont brisé l’élan initial. Malgré l’engagement et la volonté, les deux équipes sont rentrées aux vestiaires sur un score nul et vierge, 0-0. " +
    "Et c’est ce qu’a offert le Nigérian Onuche Ogbelu à la 64e minute. Sur un corner de Youcef Belaïli mal renvoyé par la défense, le milieu défensif s’est emparé du ballon à près de 40 mètres et a décoché une frappe surpuissante qui a transpercé la défense et battu un Sami Helal pourtant bien placé. Une réalisation exceptionnelle, à inscrire d’ores et déjà comme l’un des plus beaux buts de la saison, sinon le but de l’année. Un chef-d’œuvre qui a libéré tout un peuple : 0-1 !"
},
{
  id:6 ,
  title: "Départ de la délégation Sang et Or vers les États-unis!",
  image: "https://www.est.org.tn/sites/default/files/inline-images/est-world.jpg",
  content:"La délégation de l’Espérance Sportive de Tunis sest envolée ce matin en direction des États-Unis dAmérique pour prendre part à la nouvelle édition de la Coupe du Monde des Clubs aux côtés de 31 prestigieuses formations. Après une première escale à Paris, où lavion a atterri à 13h30, l’équipe a repri son vol à 16h30 à destination de Détroit, dans l’État du Michigan.Larrivée est prévue demain à 7h30 heure tunisienne.Le contingent espérantiste compte 24 joueurs convoqués pour défendre les couleurs du Sang et Or sur la scène mondiale :Ben Saïd – Memmich – Debchi Ben Ali – Bouchniba – Ben Mohamed – Ben Hmida – Tougai – Jelassi – Meriah – Koudhai Ogbelu – Konaté – Guennichi – Tka – Derbali – Dhaou Sasse – Belaïli – Mokwana – Rodriguez – Jabri – Jebali – Hamrouni"
}


];
    
 

const Latest = () => {
  const navigate = useNavigate();

  const handleClick = (item :newsShape) => {
    navigate(`/post/${item.id}`, { state: item });
  };

  return (
    <div className="py-12 px-10 md:px-12 flex flex-col gap-y-8">
      <p className="text-white font1 text-2xl font-bold md:text-3xl px-6 py-3 rounded-lg bg-[#0c1324] w-max">
        LATEST NEWS
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => handleClick(item)}
            className="bg-[#c0b340] shadow-xl rounded-2xl overflow-hidden cursor-pointer"
          >
            <img
              src={item.image}
              alt="news"
              className="w-full h-[300px] md:h-[370px]  object-cover"
            />
            <div className="p-5">
              <p className="text-black font-medium text-lg leading-snug">
                {item.title}
              </p>
              <span className="text-black text-md mt-4 inline-block hover:translate-x-1 transition-transform duration-300">
                Read More →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
