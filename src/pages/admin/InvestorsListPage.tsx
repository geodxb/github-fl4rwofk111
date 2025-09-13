@@ .. @@
 import { useState, useEffect } from 'react';
 import { motion } from 'framer-motion';
-import { Users, Plus, Search, Filter, Eye, Edit, Trash2, AlertTriangle, CheckCircle, XCircle, DollarSign, TrendingUp, Calendar, MapPin, Phone, Mail, Building, CreditCard, FileText, Download, Upload, MessageSquare, UserPlus } from 'lucide-react';
+import { Users, Plus, Search, Filter, Eye, Edit, Trash2, AlertTriangle, CheckCircle, XCircle, DollarSign, TrendingUp, Calendar, MapPin, Phone, Mail, Building, CreditCard, FileText, Download, Upload, MessageSquare, UserPlus, UserCheck } from 'lucide-react';
 import { useAuth } from '../../contexts/AuthContext';
 import { FirestoreService } from '../../services/firestoreService';
 import { Investor } from '../../types/user';
 import Button from '../../components/common/Button';
 import Modal from '../../components/common/Modal';
 import InvestorModal from '../../components/admin/InvestorModal';
+import InvestorOnboardingFlow from '../../components/onboarding/InvestorOnboardingFlow';
 import DocumentUploadModal from '../../components/admin/DocumentUploadModal';
 import MessageModal from '../../components/messaging/MessageModal';
 import ContractDownload from '../../components/admin/ContractDownload';
@@ .. @@
   const [showInvestorModal, setShowInvestorModal] = useState(false);
   const [showDocumentModal, setShowDocumentModal] = useState(false);
   const [showMessageModal, setShowMessageModal] = useState(false);
+  const [showOnboardingFlow, setShowOnboardingFlow] = useState(false);
   const [selectedInvestor, setSelectedInvestor] = useState<Investor | null>(null);
   const [isEditing, setIsEditing] = useState(false);
   const [searchTerm, setSearchTerm] = useState('');
@@ .. @@
             <div className="flex items-center space-x-4">
               <Button
                 onClick={() => {
                   setSelectedInvestor(null);
                   setIsEditing(false);
                   setShowInvestorModal(true);
                 }}
                 className="flex items-center space-x-2 uppercase tracking-wide"
               >
                 <Plus size={16} />
                 <span>ADD INVESTOR</span>
               </Button>
+              <Button
+                onClick={() => setShowOnboardingFlow(true)}
+                variant="outline"
+                className="flex items-center space-x-2 uppercase tracking-wide"
+              >
+                <UserCheck size={16} />
+                <span>NEW APPLICATION</span>
+              </Button>
             </div>
           </div>
         </div>
@@ .. @@
         onSuccess={loadInvestors}
       />

+      {/* Investor Onboarding Flow */}
+      <InvestorOnboardingFlow
+        isOpen={showOnboardingFlow}
+        onClose={() => setShowOnboardingFlow(false)}
+        onSuccess={() => {
+          setShowOnboardingFlow(false);
+          // Optionally show a success message or redirect
+        }}
+      />
+
       {/* Document Upload Modal */}
       <DocumentUploadModal
         isOpen={showDocumentModal}