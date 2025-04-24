
import { useState } from "react";
import HookButton from "@/components/HookButton";
import { useToast } from "@/components/ui/use-toast";

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Hook Öneri Sistemi
        </h1>
        <p className="text-gray-600">
          İhtiyacınıza uygun React hook önerileri için bir kategori seçin
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <HookButton
          title="Etkileşim Odaklı Hook Öner"
          onClick={() => handleHookSuggestion("interaction")}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600"
        />
        <HookButton
          title="Satış Odaklı Hook Öner"
          onClick={() => handleHookSuggestion("sales")}
          className="bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600"
        />
      </div>
    </div>
  );
};

export default Index;
