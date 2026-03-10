import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/supabaseClient"; 
import Layout from "@/components/Layout";
import { Terminal, Database, AlertCircle, CheckCircle2 } from "lucide-react";

const SupabaseTest = () => {
  const { data, error, isLoading, status } = useQuery({
    queryKey: ["supabase-test"],
    queryFn: async () => {
      // Replace 'projects' with your actual table name from Supabase
      const { data, error } = await supabase.from("projects").select("*");
      if (error) throw error;
      return data;
    },
  });

  return (
    <Layout>
      <div className="max-w-4xl mx-auto pt-20 pb-24 font-mono">
        <div className="flex items-center gap-3 text-accent mb-8">
          <Database size={20} />
          <h1 className="text-2xl font-bold uppercase tracking-widest">System_Check: Supabase</h1>
        </div>

        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 space-y-6">
          {/* Connection Status */}
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
            {isLoading ? (
              <div className="animate-spin h-5 w-5 border-2 border-accent border-t-transparent rounded-full" />
            ) : error ? (
              <AlertCircle className="text-red-500" />
            ) : (
              <CheckCircle2 className="text-green-500" />
            )}
            <div>
              <p className="text-xs text-muted-foreground uppercase">Connection_Status</p>
              <p className="text-sm font-bold uppercase">
                {isLoading ? "Fetching..." : error ? "Connection_Error" : "Connected_Successfully"}
              </p>
            </div>
          </div>

          {/* Raw JSON Result */}
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground uppercase flex items-center gap-2">
              <Terminal size={12} /> Response_Payload
            </p>
            <pre className="p-4 bg-black/50 border border-white/5 rounded-xl overflow-auto max-h-[400px] text-xs text-green-400">
              {isLoading ? "// Loading data..." : JSON.stringify(error || data, null, 2)}
            </pre>
          </div>

          {/* Troubleshooting Tip */}
          {data && data.length === 0 && !error && (
            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-200 text-xs leading-relaxed">
              <strong>LOG:</strong> Connection works, but 0 rows returned. 
              Check if: <br />
              1. You have rows in your 'projects' table. <br />
              2. You have enabled RLS (Row Level Security) policies for 'SELECT' in Supabase.
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SupabaseTest;