import { useState } from "react";
import HookButton from "@/components/HookButton";
import { useToast } from "@/components/ui/use-toast";
import MatrixRain from "@/components/ui/matrix-rain";

const Index = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleHookSuggestion = (type: "interaction" | "sales") => {
    setIsLoading(true);
    
    // Simüle edilmiş hook önerileri
    const suggestions = {
      interaction: [
        "Kullanıcı Deneyimini Geliştir: useState ile Dinamik Form Kontrolü",
        "Performans Optimizasyonu: useMemo ile Hesaplamaları Önbelleğe Al",
        "Özel Hook: useWindowSize ile Responsive Tasarım"
      ],
      sales: [
        "Dönüşüm Artır: useReducer ile Alışveriş Sepeti Yönetimi",
        "Satış Takibi: useContext ile Global State Management",
        "Analytics Hook: useTracking ile Kullanıcı Davranışlarını İzle"
      ]
    };

    // Rastgele bir öneri seç
    const randomSuggestion = suggestions[type][Math.floor(Math.random() * suggestions[type].length)];

    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Hook Önerisi",
        description: randomSuggestion,
        duration: 5000,
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <MatrixRain 
        fontSize={16}
        color="#00ff41"
        characters="01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
        fadeOpacity={0.05}
        speed={1.2}
      />
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-4xl font-bold text-green-400 mb-4 text-shadow-lg">
          Hook Öneri Sistemi
        </h1>
        <p className="text-green-300">
          İhtiyacınıza uygun React hook önerileri için bir kategori seçin
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 relative z-10">
        <HookButton
          title="Etkileşim Odaklı Hook Öner"
          onClick={() => handleHookSuggestion("interaction")}
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700"
        />
        <HookButton
          title="Satış Odaklı Hook Öner"
          onClick={() => handleHookSuggestion("sales")}
          className="bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700"
        />
      </div>
    </div>
  );
};

export default Index;
