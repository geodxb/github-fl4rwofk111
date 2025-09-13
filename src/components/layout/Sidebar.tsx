@@ .. @@
 import { useState } from 'react';
 import { Link, useLocation, useNavigate } from 'react-router-dom';
-import { Home, Users, DollarSign, MessageSquare, Settings, LogOut, Shield, BarChart3, FileText, TrendingUp, ChevronDown, ChevronRight, Activity, AlertTriangle, Eye, CreditCard, Building, Zap, Target, Award } from 'lucide-react';
+import { Home, Users, DollarSign, MessageSquare, Settings, LogOut, Shield, BarChart3, FileText, TrendingUp, ChevronDown, ChevronRight, Activity, AlertTriangle, Eye, CreditCard, Building, Zap, Target, Award, UserCheck } from 'lucide-react';
 import { useAuth } from '../../contexts/AuthContext';
 import { motion, AnimatePresence } from 'framer-motion';
@@ .. @@
     { name: 'DASHBOARD', path: '/governor', icon: Shield },
     { name: 'INVESTORS', path: '/governor/investors', icon: Users },
     { name: 'WITHDRAWALS', path: '/governor/withdrawals', icon: DollarSign },
+    { name: 'APPLICATIONS', path: '/governor/account-requests', icon: UserCheck },
     { name: 'MESSAGES', path: '/governor/messages', icon: MessageSquare },
   ];